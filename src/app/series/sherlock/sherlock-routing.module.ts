import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SherlockPage } from './sherlock.page';

const routes: Routes = [
  {
    path: '',
    component: SherlockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SherlockPageRoutingModule {}
