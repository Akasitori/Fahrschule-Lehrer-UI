import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-neue-schueler-feedcard',
  templateUrl: './neue-schueler-feedcard.component.html',
  styleUrls: ['./neue-schueler-feedcard.component.css']
})

export class NeueSchuelerFeedcardComponent {

  @Input()
  vorname ="";

  @Input()
  nachname = "";

  @Input()
  id = "";

}
