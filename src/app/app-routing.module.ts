import { PreleitorComponent } from './componentes/preleitores/preleitor/preleitor.component';
import { EventoDashComponent } from './componentes/evento-dash/evento-dash.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  

const routes: Routes = 
[
{path:'eventos',component:EventoDashComponent},
{path:'preleitores',component:PreleitorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
