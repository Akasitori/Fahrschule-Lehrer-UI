import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schueler-feedcard',
  templateUrl: './schueler-feedcard.component.html',
  styleUrls: ['./schueler-feedcard.component.css']
})

export class SchuelerFeedcardComponent {
  @Input()
  vorname = "";
  
  @Input()
  nachname =""

  @Input()
  status = "";

  @Input()
  id = "";
}
