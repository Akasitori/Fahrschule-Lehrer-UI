import { RouterModule, Routes } from "@angular/router";
import { FeatureLehrerDatenComponent } from "./lehrer-kontaktdaten/lehrer-kontaktdaten.component";


const LEHRERDATEN_ROUTES: Routes = [
    {
        path:'',
        component: FeatureLehrerDatenComponent
    },
    {
        //wenn der Benutzer komische Adresse eingetragen hat, soll zur Home weitergeleitet werden
        path: '**',
        redirectTo: ''
    }
]

export const LehrerDatenRouterModule = RouterModule.forChild(LEHRERDATEN_ROUTES); 