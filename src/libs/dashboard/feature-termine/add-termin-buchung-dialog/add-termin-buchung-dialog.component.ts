import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewTermin, NewTerminStringFormat } from '../../domain/src/lib/entities/termin/termin';
import { TerminFacade } from '../../domain/src/lib/application/termin/termin.facade';
import { SchuelerFacade } from '../../domain/src/lib/application/schueler/schueler.facade';
import { FormatDateAndTimeService } from '../../domain/src/lib/infrastructure/date/format-date.service';

@Component({
  selector: 'app-add-termin-buchung-dialog',
  templateUrl: './add-termin-buchung-dialog.component.html',
  styleUrls: ['./add-termin-buchung-dialog.component.css']
})
export class AddTerminBuchungDialogComponent {

  schuelerByLehrerId$ = this.schuelerFacade.schuelerByLehrerId$
  chronologicalTimes = true;

  constructor(
    public dialogRef: MatDialogRef<AddTerminBuchungDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewTerminStringFormat,
    private terminFacade: TerminFacade,
    private schuelerFacade: SchuelerFacade,
    public formatDateAndTimeService: FormatDateAndTimeService
  ) {}

  vierundzwanzig : number = 24;
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(){
    if(this.formatDateAndTimeService.isChronological(this.data.beginn, this.data.ende)){
      this.chronologicalTimes = true;
      this.dialogRef.close(this.data);
    }
    else{
      this.chronologicalTimes = false;
    } 
  }
}
