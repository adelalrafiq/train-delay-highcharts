import { Morethan30minComponent } from './morethan30min/morethan30min.component';
import { C16C30minComponent } from './c16-c30min/c16-c30min.component';
import { C6C15minComponent } from './c6-c15min/c6-c15min.component';
import { C1C5minComponent } from './c1-c5min/c1-c5min.component';
import { C0minComponent } from './c0min/c0min.component';
import { CallapiComponent } from './callapi/callapi.component';
import { ChartComponent } from './chart/chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';


const routes: Routes = [
  {path:'', component: AllComponent},
  {path:'chart' , component:ChartComponent},
  {path:'callapi', component:CallapiComponent},
  {path:'0min', component: C0minComponent},
  {path: '1-5min', component: C1C5minComponent},
  {path: '6-15min',component: C6C15minComponent},
  {path: '16-30min',component: C16C30minComponent},
  {path: '+30min', component: Morethan30minComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
