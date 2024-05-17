import { NgModule } from '@angular/core';
import { KalenderDatenRouterModule } from './feature-kalender.routes';
import { FeatureKalenderComponent } from './feature-kalender.component';
import { TerminComponent } from './termin/feature-termin.component';
import { CommonModule } from '@angular/common';

//Material
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports:[
        CommonModule,
        KalenderDatenRouterModule,

        //Angular Material
        MatDatepickerModule,
        MatCardModule,
        MatNativeDateModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
    
    declarations:[
        FeatureKalenderComponent,
        TerminComponent
    ],
})

export class FeatureKalenderModule {}