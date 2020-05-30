import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroilPage } from './broil.page';

const routes: Routes = [
  {
    path: '',
    component: BroilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroilPageRoutingModule {}
