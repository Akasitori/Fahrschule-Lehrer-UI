import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  
  { 
    path: '**', 
    redirectTo: '' 
  },
];

export const HomeRouterModule = RouterModule.forChild(HOME_ROUTES);
