import { Routes, RouterModule }  from '@angular/router';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  }
];

export const routing = RouterModule.forChild(routes);