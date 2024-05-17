import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home.route';

//Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { HomeTerminBoxComponent } from 'src/libs/dashboard/feature-termine/home-termin-box/home-termin-box.component';

//Angular Material
@NgModule({
  imports: [
    HomeRouterModule,
    CommonModule,
    
    //Angular Material
    MatCardModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
  ],
  
  declarations:[
    HomeComponent,
    HomeTerminBoxComponent
  ]
})
export class HomeModule {}
