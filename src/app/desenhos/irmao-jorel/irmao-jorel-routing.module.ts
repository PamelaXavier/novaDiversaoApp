import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrmaoJorelPage } from './irmao-jorel.page';

const routes: Routes = [
  {
    path: '',
    component: IrmaoJorelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrmaoJorelPageRoutingModule {}
