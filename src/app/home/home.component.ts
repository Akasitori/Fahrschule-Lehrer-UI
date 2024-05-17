import { Component } from '@angular/core';
import { LehrerFacade } from 'src/libs/dashboard/domain/src/lib/application/lehrer/lehrer.facade';
import { TerminFacade } from 'src/libs/dashboard/domain/src/lib/application/termin/termin.facade';
import { Lehrer } from 'src/libs/dashboard/domain/src/lib/entities/lehrer/lehrer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentDate = new Date();
  beginn = "09:00";
  ende = "10:30";

  lehrerVorname = "";
  lehrerNachname = "";
  defaultLehrerId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  lehrerById$ = this.lehrerFacade.lehrerById$;
  termineForTodayByLehrerId$ = this.terminFacade.termineForTodayByLehrerId$;

  constructor(
    private lehrerFacade: LehrerFacade,
    private terminFacade: TerminFacade
  ){

    this.lehrerById$.subscribe({
      next: (data) => {
        if(data != null){
          this.lehrerVorname = data.vorname;
          this.lehrerNachname = data.nachname;
        }
      }
    });

    lehrerFacade.getLehrerById(this.defaultLehrerId);
    terminFacade.getTermineForTodayByLehrerId(this.defaultLehrerId);
  }

}
