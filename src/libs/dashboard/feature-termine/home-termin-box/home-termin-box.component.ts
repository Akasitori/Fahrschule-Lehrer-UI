import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-termin-box',
  templateUrl: './home-termin-box.component.html',
  styleUrls: ['./home-termin-box.component.css']
})
export class HomeTerminBoxComponent {
  currentDate = new Date();

  @Input()
  beginn: Date | undefined;
  
  @Input()
  ende: Date | undefined;
  
  @Input()
  terminStatus: string = "";

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
