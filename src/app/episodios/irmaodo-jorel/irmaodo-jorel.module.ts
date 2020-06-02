import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrmaodoJorelPageRoutingModule } from './irmaodo-jorel-routing.module';

import { IrmaodoJorelPage } from './irmaodo-jorel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrmaodoJorelPageRoutingModule
  ],
  declarations: [IrmaodoJorelPage]
})
export class IrmaodoJorelPageModule {}
