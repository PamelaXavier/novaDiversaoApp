import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadManPageRoutingModule } from './mad-man-routing.module';

import { MadManPage } from './mad-man.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadManPageRoutingModule
  ],
  declarations: [MadManPage]
})
export class MadManPageModule {}
