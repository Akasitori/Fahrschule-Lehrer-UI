import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NeueSchuelerFeedcardComponent } from './neue-schueler-feedcard/neue-schueler-feedcard.component';
import { SchuelerFeedcardComponent } from './schueler-feedcard/schueler-feedcard.component';
import { SchuelerKontaktdatenComponent } from './schueler-kontaktdaten/schueler-kontaktdaten.component';
import { FeatureSchuelerComponent } from './schueler-list/schueler-list.component';
import { SchulerlistRouterModule } from './schueler.routes';

//Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports:[
        SchulerlistRouterModule,

        //Material
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTabsModule,
        MatDialogModule,
        ReactiveFormsModule,
        CommonModule
    ],
    
    declarations:[
        FeatureSchuelerComponent,
        SchuelerFeedcardComponent,
        SchuelerKontaktdatenComponent,
        NeueSchuelerFeedcardComponent,
    ]
})

export class FeatureSchuelerModule {}