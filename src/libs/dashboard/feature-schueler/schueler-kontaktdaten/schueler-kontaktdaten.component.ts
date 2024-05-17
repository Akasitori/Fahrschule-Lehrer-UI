import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LehrerFacade } from '../../domain/src/lib/application/lehrer/lehrer.facade';
import { SchuelerFacade } from '../../domain/src/lib/application/schueler/schueler.facade';
import { Lehrer } from '../../domain/src/lib/entities/lehrer/lehrer';
import { Schueler } from '../../domain/src/lib/entities/schueler/schueler';
import { DialogComponent } from '../../shared/ui-components/dialog/dialog.component';

@Component({
  selector: 'app-schueler-kontaktdaten',
  templateUrl: './schueler-kontaktdaten.component.html',
  styleUrls: ['./schueler-kontaktdaten.component.css']
})
export class SchuelerKontaktdatenComponent implements OnInit{
  
  vorname!: string;
  nachname!: string;
  lehrerName!: string;

  /*Inputs*/
  bearbeitenEingabeDeaktiviert = true;

  /*Knöpfe*/
  entziehenButtonDeaktiviert = true;

  id!: string;

  schuelerId!: string;
  lehrerById$ = this.lehrerFacade.lehrerById$;
  schuelerById$ = this.schuelerFacade.schuelerById$;
  schuelerKontaktdatenFormular: FormGroup = new FormGroup({});

  constructor(
    private schuelerFacade: SchuelerFacade,
    private lehrerFacade: LehrerFacade,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.leseSchuelerIdAusUrl();
    this.initialisiereFormular();
    this.holeSchuelerKontaktdatenVonDb();
    this.holeLehrerKontaktdatenVonDb();
  }

  leseSchuelerIdAusUrl() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.id !== ''){
      this.schuelerFacade.getSchuelerById(this.id);
    }
  }

  initialisiereFormular(){
    this.schuelerKontaktdatenFormular = this.formBuilder.group({
      id:['', Validators.required],
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      geburtsdatum: ['', Validators.required],
      geschlecht: ['', Validators.required],
      strasse: ['', Validators.required],
      hausnummer: ['', Validators.required],
      stadt: ['', Validators.required],
      plz: ['', Validators.required],
      telnr: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      datumDerAnmeldung: ['', Validators.required],
      status: ['', Validators.required],
      fuehrerscheinklassen: ['', Validators.required],
      getriebeTyp: ['', Validators.required],
      lehrerName: ['', Validators.required]
    })
  }

  holeSchuelerKontaktdatenVonDb(){
    this.schuelerById$.subscribe({
      next: (data) => {
        if (data != null){
          this.setzeWerteImFormular(data);
          this.ladeVornameUndNachnameDesSchuelers(data);
          this.ladeVornameUndNachnameDesLehrersDurchLehrerId(data.lehrerId!);
          this.entziehenButtonDeaktiviert = false;
        }
      }
    })
  }

  setzeWerteImFormular(data: Schueler) {
    const geburtsdatum = this.aendereDatumZuKurzemDatum(data.geburtsdatum);
    const datumDerAnmeldung = this.aendereDatumZuKurzemDatum(data.datumDerAnmeldung);
    this.schuelerKontaktdatenFormular.patchValue({
      id: data.id,
      vorname: data.vorname,
      nachname: data.nachname,
      geburtsdatum: geburtsdatum,
      geschlecht: data.geschlecht,
      strasse: data.adresse.strasse,
      hausnummer: data.adresse.hausNr,
      stadt: data.adresse.stadt,
      plz: data.adresse.plz,
      telnr: data.kontaktdaten.tel,
      email: data.kontaktdaten.email,
      datumDerAnmeldung: datumDerAnmeldung,
      status: data.status,
      fuehrerscheinklassen: data.fuererscheinklasse,
      getriebeTyp: data.getriebeTyp,
    })
  }

  aendereDatumZuKurzemDatum(datum: string | Date): string | null{
    const datePipe = new DatePipe('de-DE');
    return datePipe.transform(datum, 'MM/dd/yyyy');
  }

  ladeVornameUndNachnameDesSchuelers(data: Schueler){
    this.schuelerId = data.id;
    this.vorname = data.vorname;
    this.nachname = data.nachname;
  }

  ladeVornameUndNachnameDesLehrersDurchLehrerId(lehrerId: string){
    this.lehrerFacade.getLehrerById(lehrerId);
    this.holeLehrerKontaktdatenVonDb();
  }

  holeLehrerKontaktdatenVonDb(){
    this.lehrerById$.subscribe({
      next: (data) => {
        if (data != null){
          this.setzeVornameUndNachnameDesLehrers(data);
          this.schuelerKontaktdatenFormular.patchValue({
            lehrerName: this.lehrerName
          })
        }
      }
    })
  }

  setzeVornameUndNachnameDesLehrers(data: Lehrer){
    this.lehrerName = data.vorname + ' ' + data.nachname;
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(
      DialogComponent,
      {
        width: '700px',
        data:{
          vorname: this.vorname,
          nachname: this.nachname,
          schuelerId: this.id
        }
      }
    );
  }

  

}
