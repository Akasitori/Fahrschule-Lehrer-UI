import { Component } from '@angular/core';
import * as moment from 'moment';
import { TerminFacade } from '../../domain/src/lib/application/termin/termin.facade';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddTerminBuchungDialogComponent } from '../add-termin-buchung-dialog/add-termin-buchung-dialog.component';
import { NewTermin } from '../../domain/src/lib/entities/termin/termin';
import { SchuelerFacade } from '../../domain/src/lib/application/schueler/schueler.facade';
import { FormatDateAndTimeService } from '../../domain/src/lib/infrastructure/date/format-date.service';

@Component({
  selector: 'app-terminplanung',
  templateUrl: './terminplanung.component.html',
  styleUrls: ['./terminplanung.component.css']
})
export class FeatureTeminplanungComponent{

  terminByLehrerId$ = this.terminFacade.terminByLehrerId$;

  panelOpenState = false;
  currentDate = new Date();
  startDatum = moment(this.currentDate).startOf('isoWeek').toDate();
  endDatum = moment(this.currentDate).endOf('isoWeek').toDate();

  dateList : string[] = [];

  terminCreated$ = this.terminFacade.terminCreated$;

  selectedDateRange: { startDate: Date | null, endDate: Date | null} = { startDate: this.startDatum, endDate: this.endDatum };
  
  defaultLehrerId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

  beginn = "";
  ende = "";
  schuelerId = "";
  uebungsTyp = "";
  terminStatus = "";

  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(private terminFacade: TerminFacade, public dialog: MatDialog, private schuelerFacade: SchuelerFacade, private formatDateAndTimeService: FormatDateAndTimeService){
    this.fillDateList();
    this.terminFacade.getTermineByLehrerId(this.defaultLehrerId, this.startDatum, this.endDatum);
    this.schuelerFacade.getSchuelerByLehrerId(this.defaultLehrerId);

            
    this.terminCreated$.subscribe({
      next: () => {
        if(this.selectedDateRange.startDate != null && this.selectedDateRange.endDate != null){
          console.log("Hallo");
          this.terminFacade.getTermineByLehrerId(this.defaultLehrerId, this.selectedDateRange.startDate, this.selectedDateRange.endDate);
      }
    }
    });
    
  }

  onDateRangeSelected(event: { startDate: Date | null, endDate: Date | null }) {

    this.selectedDateRange = event;
    this.startDate = this.startDate;
    this.endDate = this.endDate;

    if(this.selectedDateRange.startDate && this.selectedDateRange.endDate){
      this.terminFacade.getTermineByLehrerId(this.defaultLehrerId, this.selectedDateRange.startDate, this.selectedDateRange.endDate);
    }
    this.fillDateList();
  }
  
  private fillDateList(){
    this.dateList = [];
    if(this.selectedDateRange.startDate && this.selectedDateRange.endDate){
      let loop = new Date(this.selectedDateRange.startDate);
      while (loop <= this.selectedDateRange.endDate) {
        this.dateList.push(formatDate(loop, "yyyy-MM-dd", "en-Us"));
        loop = new Date(loop);
        loop.setDate(loop.getDate() + 1);
      }
    }
  }

  isToday(date: string, terminBeginn: string) : boolean
  {
    if(this.selectedDateRange.startDate != null && this.selectedDateRange.endDate != null){

    const terminDateWithoutTIme = formatDate(terminBeginn, "yyyy-MM-dd", "en-Us");
    const iteratedDate = formatDate(date, "yyyy-MM-dd", "en-Us")
    if(iteratedDate === terminDateWithoutTIme)
    {return true;}
      else{return false;}
    }
    else{return false;}
  }

  openAddBuchungDialog(date: string){
    const dialogRef = this.dialog.open(AddTerminBuchungDialogComponent, {
      data: {
        beginn: this.beginn,
        ende: this.ende,
        schuelerId: this.schuelerId,
        uebungsTyp: this.uebungsTyp,
        terminStatus: this.terminStatus,
        datum: date
      },
  
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      const dialogResult = result;
      console.log(dialogResult);

      if(result != null && result != undefined){
        const neuerTermin: NewTermin = {
          beginn: this.formatDateAndTimeService.buildDateFromNumericalStrings(result.datum, result.beginn).toISOString(),
          ende: this.formatDateAndTimeService.buildDateFromNumericalStrings(result.datum, result.ende).toISOString(),
          schuelerId: result.schuelerId,
          lehrerId: this.defaultLehrerId,
          uebungsTyp: result.uebungsTyp,
          terminStatus: "Ausstehend"
        }

        console.log("normal_", this.formatDateAndTimeService.buildDateFromNumericalStrings(result.datum, result.beginn));
        console.log("iso_",this.formatDateAndTimeService.buildDateFromNumericalStrings(result.datum, result.beginn).toISOString());
        
        console.log("tschüss");
        this.terminFacade.createTermin(neuerTermin);        
      }
    });
  
  }
}
