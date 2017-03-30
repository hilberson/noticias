import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { routing } from './principal.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    PrincipalComponent
  ]
})
export class PrincipalModule {}