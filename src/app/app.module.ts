import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//DatePipe
import { LOCALE_ID } from '@angular/core';
import localeDe from "@angular/common/locales/de";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeDe, "de");

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({

  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    
    //Angular Material
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
  ],

  providers: [
    //DatePipe
    { 
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
