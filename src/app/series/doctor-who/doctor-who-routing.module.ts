import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorWhoPage } from './doctor-who.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorWhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorWhoPageRoutingModule {}
