import { Component, OnInit } from '@angular/core';
import { SchuelerFacade } from '../../domain/src/lib/application/schueler/schueler.facade';

@Component({
  selector: 'app-feature-schueler',
  templateUrl: './schueler-list.component.html',
  styleUrls: ['./schueler-list.component.css']
})

export class FeatureSchuelerComponent implements OnInit{

  id!: string;
  /* lehrerId = "ef9bf2b2-17e9-4b66-8dc5-bc641937bb43"; */
  defaultLehrerId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  schuelerMitNeuemStatus$ = this.schuelerFacade.schuelerMitNeuemStatus$;
  schuelerByLehrerId$ = this.schuelerFacade.schuelerByLehrerId$;

  constructor(
    private schuelerFacade: SchuelerFacade,
  ){}

  ngOnInit(): void {
    this.leseLehrerIdAusUrl();
  }

  leseLehrerIdAusUrl() {
    /* this.id = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.id !== ''){
      this.schuelerFacade.getLehrerById(this.id);
    } */
    this.schuelerFacade.getSchuelerByLehrerId(this.defaultLehrerId);
  }
  
}
