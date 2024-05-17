import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  heute = new Date();
  stunde = this.heute.getHours();

  ngOnInit(): void {
    const navigationImage = document.getElementById('selectNavigationImage') as HTMLImageElement;
    if (this.stunde <= 20) {
      navigationImage.src="../assets/img/navigation-background/tag.jpg";
    } else{
      navigationImage.src="../assets/img/navigation-background/abend.jpg";
    }
  }
}
