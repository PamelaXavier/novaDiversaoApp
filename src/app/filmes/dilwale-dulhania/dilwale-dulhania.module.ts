import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DilwaleDulhaniaPageRoutingModule } from './dilwale-dulhania-routing.module';

import { DilwaleDulhaniaPage } from './dilwale-dulhania.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DilwaleDulhaniaPageRoutingModule
  ],
  declarations: [DilwaleDulhaniaPage]
})
export class DilwaleDulhaniaPageModule {}
