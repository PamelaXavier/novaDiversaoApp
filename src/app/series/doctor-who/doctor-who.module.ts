import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorWhoPageRoutingModule } from './doctor-who-routing.module';

import { DoctorWhoPage } from './doctor-who.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorWhoPageRoutingModule
  ],
  declarations: [DoctorWhoPage]
})
export class DoctorWhoPageModule {}
