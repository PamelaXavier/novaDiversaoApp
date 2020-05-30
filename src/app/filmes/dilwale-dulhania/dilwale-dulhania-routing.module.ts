import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DilwaleDulhaniaPage } from './dilwale-dulhania.page';

const routes: Routes = [
  {
    path: '',
    component: DilwaleDulhaniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DilwaleDulhaniaPageRoutingModule {}
