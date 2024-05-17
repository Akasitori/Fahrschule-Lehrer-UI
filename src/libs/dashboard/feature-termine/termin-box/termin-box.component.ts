import { Component, Input } from '@angular/core';
import { TerminFacade } from '../../domain/src/lib/application/termin/termin.facade';

@Component({
  selector: 'app-termin-box',
  templateUrl: './termin-box.component.html',
  styleUrls: ['./termin-box.component.css']
})
export class TerminBoxComponent {

  @Input()
  beginn: Date | null = null;
  
  @Input()
  ende: Date | null = null;

  @Input()
  terminDauerInMinuten = 0;

  @Input()
  uebungsTyp = "";

  @Input()
  terminStatus = "";

  @Input()
  id = "";

  disableTerminStatusButtons = false; // delete later 

  constructor(){
  }

  getBackgroundColor(): string {
    switch (this.terminStatus) {
      case "Ausstehend":
        return 'gold';
      case "Angenommen":
        return '#2e554d'; //grün
      case "Abgelehnt":
        return 'indianred';
      default:
        return 'white'; // Default color if status doesn't match any case
    }
  }

}
