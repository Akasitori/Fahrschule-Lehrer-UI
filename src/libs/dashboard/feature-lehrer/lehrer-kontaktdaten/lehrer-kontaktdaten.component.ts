import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LehrerFacade } from '../../domain/src/lib/application/lehrer/lehrer.facade';
import { AktualisierterLehrer, Lehrer } from '../../domain/src/lib/entities/lehrer/lehrer';

@Component({
  selector: 'app-lehrer-kontaktdaten',
  templateUrl: './lehrer-kontaktdaten.component.html',
  styleUrls: ['./lehrer-kontaktdaten.component.css']
})

export class FeatureLehrerDatenComponent implements OnInit{

  vorname!: string;
  nachname!: string;

  /*Inputs*/
  eingabeDeaktiviert = true;
  bearbeitenEingabeDeaktiviert = true;

  /*Knöpfe*/
  speichernDeaktiv = true;
  bearbeitungsmodusAktiv = false;
  bearbeitenButtonDeaktiviert = true;

  id!: string;
  /* lehrerId = "ef9bf2b2-17e9-4b66-8dc5-bc641937bb43"; */
  defaultLehrerId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  lehrerById$ = this.lehrerFacade.lehrerById$;
  lehrerKontaktdatenFormular: FormGroup = new FormGroup({});

  constructor(
    private lehrerFacade: LehrerFacade,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.leseLehrerIdAusUrl();
    this.initialisiereFormular();
    this.holeLehrerKontaktdatenVonDb();
  }
  
  leseLehrerIdAusUrl() {
    /* this.id = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.id !== ''){
      this.lehrerFacade.getLehrerById(this.id);
    } */
    this.lehrerFacade.getLehrerById(this.defaultLehrerId);
  }
  
  initialisiereFormular(){
    this.lehrerKontaktdatenFormular = this.formBuilder.group({
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      geburtsdatum: ['', Validators.required],
      geschlecht: ['', Validators.required],
      strasse: ['', Validators.required],
      hausNr: ['', Validators.required],
      stadt: ['', Validators.required],
      plz: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fuehrerscheinklasse : ['', Validators.required],
      zertifikate : ['', Validators.required]
    })
  }

  holeLehrerKontaktdatenVonDb(){
    this.lehrerById$.subscribe({
      next: (data) => {
        if (data != null){
          this.setzeWerteImFormular(data);
          this.ladeVornameUndNachnameDesLehrers(data);
          this.bearbeitenButtonDeaktiviert = false;
        }
      }
    })
  }

  setzeWerteImFormular(data: Lehrer) {
    const geburtsdatum = this.aendereDatumZuKurzemDatum(data.geburtsdatum);
    this.lehrerKontaktdatenFormular.patchValue({
      vorname: data.vorname,
      nachname: data.nachname,
      geburtsdatum: geburtsdatum,
      geschlecht: data.geschlecht,
      strasse: data.adresse.strasse,
      hausNr: data.adresse.hausNr,
      stadt: data.adresse.stadt,
      plz: data.adresse.plz,
      tel: data.kontaktdaten.tel,
      email: data.kontaktdaten.email,
      fuehrerscheinklasse: data.fuehrerscheinklasse,
      zertifikate : data.zertifizierterFahrlehrer
    })
  }

  aendereDatumZuKurzemDatum(datum: string): string | null{
    const datePipe = new DatePipe('de-DE');
    return datePipe.transform(datum, 'MM/dd/yyyy');
  }

  ladeVornameUndNachnameDesLehrers(data: Lehrer){
    this.vorname = data.vorname;
    this.nachname = data.nachname;
  }

  bearbeitungsAktiv(){
    this.bearbeitenEingabeDeaktiviert = false;
    this.bearbeitungsmodusAktiv = true;
  }

  bearbeitungsDeaktiv(){
    this.bearbeitenEingabeDeaktiviert = true;
    this.bearbeitungsmodusAktiv = false;
  }

  speichernKontaktdaten(){
    const formWerte = this.lehrerKontaktdatenFormular.value;

    const aktualisierterLehrer: AktualisierterLehrer = {
      id: this.defaultLehrerId,
      vorname: formWerte.vorname,
      nachname: formWerte.nachname,
      adresse:{
        strasse: formWerte.strasse,
        hausNr: formWerte.hausNr,
        stadt: formWerte.stadt,
        plz: formWerte.plz,
      },
      kontaktdaten: {
        tel: formWerte.tel,
        email: formWerte.email,
      }
    }

    this.lehrerFacade.updateLehrer(aktualisierterLehrer);
    this.bearbeitungsDeaktiv();
  }

}
