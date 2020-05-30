import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadManPage } from './mad-man.page';

const routes: Routes = [
  {
    path: '',
    component: MadManPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadManPageRoutingModule {}
