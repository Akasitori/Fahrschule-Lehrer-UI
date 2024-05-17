import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SchuelerFacade } from 'src/libs/dashboard/domain/src/lib/application/schueler/schueler.facade';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {
  
  @Input()
  vorname: string = "";

  @Input()
  nachname: string = "";

  @Input()
  schuelerId: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA)
      public data: any,
      private dialogRef: MatDialogRef<DialogComponent>,
      private router: Router,
      private schuelerFacade: SchuelerFacade,
  ){}

  schuelerNichtEntlassen(): void {
    this.dialogRef.close();
  }

  schuelerEntlassen(): void {
    this.schuelerFacade.removeSchuelereVonLehrerList(this.data.schuelerId);
    this.dialogRef.close();
    this.router.navigate(['/schuelerliste']);
  }
}
