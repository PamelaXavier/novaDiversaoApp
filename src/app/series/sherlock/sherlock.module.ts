import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SherlockPageRoutingModule } from './sherlock-routing.module';

import { SherlockPage } from './sherlock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SherlockPageRoutingModule
  ],
  declarations: [SherlockPage]
})
export class SherlockPageModule {}
