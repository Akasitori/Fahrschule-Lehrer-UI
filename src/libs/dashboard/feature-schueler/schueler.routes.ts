import { RouterModule, Routes } from '@angular/router';
import { SchuelerKontaktdatenComponent } from './schueler-kontaktdaten/schueler-kontaktdaten.component';
import { FeatureSchuelerComponent } from './schueler-list/schueler-list.component';

const SCHUELERLIST_ROUTES: Routes = [
    {
        path:'',
        component: FeatureSchuelerComponent
    },
    {
        path:'kontaktdaten/:id',
        component: SchuelerKontaktdatenComponent
    },
    {
        //wenn der Benutzer komische Adresse eingetragen hat, soll zur Home weitergeleitet werden
        path: '**',
        redirectTo: '' 
    },
]

export const SchulerlistRouterModule = RouterModule.forChild(SCHUELERLIST_ROUTES);