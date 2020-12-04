import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path: "", component: MainComponent, children: [
    {path: "dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path: "reservations", loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule)},
    {path: "**", redirectTo: "dashboard", pathMatch: "full"}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
