import { NgModule } from '@angular/core';
import { FeatureLehrerDatenComponent } from './lehrer-kontaktdaten/lehrer-kontaktdaten.component';
import { LehrerDatenRouterModule } from './lehrer.routes';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        LehrerDatenRouterModule,

        //Material
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        
        ReactiveFormsModule,
        CommonModule
    ],
    
    declarations:[
        FeatureLehrerDatenComponent
    ]
})

export class FeatureLehrerModule {}