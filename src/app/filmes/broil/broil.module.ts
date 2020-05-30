import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroilPageRoutingModule } from './broil-routing.module';

import { BroilPage } from './broil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BroilPageRoutingModule
  ],
  declarations: [BroilPage]
})
export class BroilPageModule {}
