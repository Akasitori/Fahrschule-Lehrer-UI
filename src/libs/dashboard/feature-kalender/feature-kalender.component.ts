import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-kalender',
  templateUrl: './feature-kalender.component.html',
  styleUrls: ['./feature-kalender.component.css']
})

export class FeatureKalenderComponent{
  
  constructor(private router: Router) {}
  
  selectedDate = new Date();
  @Output() dateSelected = new EventEmitter<Date>();
  
  onDateSelect(date: Date){
    this.selectedDate = date;
    this.navigateToTermin();
  }

  navigateToTermin(){
    this.router.navigate(['kalender/termin'], { queryParams: { date: this.selectedDate.toString()}});
  }
}


