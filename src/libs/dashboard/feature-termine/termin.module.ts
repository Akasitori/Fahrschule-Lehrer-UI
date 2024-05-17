import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureTeminplanungComponent } from './terminplanung/terminplanung.component';
import { TerminPlanungRouterModule } from './termin.routes';
import { AddTerminBuchungDialogComponent } from './add-termin-buchung-dialog/add-termin-buchung-dialog.component';
import { TerminBoxComponent } from './termin-box/termin-box.component';
import { SelectDateRangeComponent } from './select-date-range/select-date-range.component';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule} from '@angular/material/dialog';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';  

@NgModule({
    imports:[
        TerminPlanungRouterModule,
        CommonModule,

        //Material
        MatDatepickerModule,
        MatCardModule,
        MatNativeDateModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatDialogModule,
        NgxMatTimepickerModule
    ],
    
    declarations:[
        FeatureTeminplanungComponent,
        TerminBoxComponent,
        SelectDateRangeComponent,
        AddTerminBuchungDialogComponent,
    ]
})

export class FeatureTerminPlanungModule {}