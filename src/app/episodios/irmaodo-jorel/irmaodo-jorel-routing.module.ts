import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrmaodoJorelPage } from './irmaodo-jorel.page';

const routes: Routes = [
  {
    path: '',
    component: IrmaodoJorelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrmaodoJorelPageRoutingModule {}
