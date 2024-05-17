import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature-termin',
  templateUrl: './feature-termin.component.html',
  styleUrls: ['./feature-termin.component.css']
})

export class TerminComponent implements OnInit{

  receivedDate = new Date();

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    console.log("termin");
    this.route.queryParams.subscribe(params => {
      if (params['date']) {
        this.receivedDate = new Date(params['date']);
      }
    }) 
  }

}
