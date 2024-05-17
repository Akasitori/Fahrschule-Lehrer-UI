import { RouterModule, Routes } from "@angular/router";
import { FeatureKalenderComponent } from "./feature-kalender.component";
import { TerminComponent } from "./termin/feature-termin.component";

const KALENDERDATEN_ROUTES: Routes = [
    {
        path:'',
        component: FeatureKalenderComponent
    },

    {
        path:'termin',
        component: TerminComponent   
    },

    {
        //wenn der Benutzer komische Adresse eingetragen hat, soll zur Home weitergeleitet werden
        path: '**',
        redirectTo: ''
    }
]

export const KalenderDatenRouterModule = RouterModule.forChild(KALENDERDATEN_ROUTES); 