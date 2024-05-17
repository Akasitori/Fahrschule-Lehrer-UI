import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(_ => _.HomeModule)
  },

  {
    path:'fahrlehrerdaten',
    loadChildren: () => import('../libs/dashboard/feature-lehrer/lehrer.module').then(_ => _.FeatureLehrerModule),
  },

  {
    path:'schuelerliste',
    loadChildren: () => import('../libs/dashboard/feature-schueler/schueler.module').then(_ => _.FeatureSchuelerModule),
  },

  {
    path:'kalender',
    loadChildren: () => import('../libs/dashboard/feature-kalender/feature-kalender.module').then(_ => _.FeatureKalenderModule),
  },

  {
    path:'terminplanung',
    loadChildren: () => import('../libs/dashboard/feature-termine/termin.module').then(_ => _.FeatureTerminPlanungModule),
  },

  { 
    //wenn der Benutzer komische Adresse eingetragen hat, soll zur Home weitergeleitet werden
    path: '**', 
    redirectTo: 'home' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
