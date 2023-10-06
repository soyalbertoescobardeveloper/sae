import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import {DetailPaxRoutingModule} from './detail-pax-routing.module'
import { DetailPaxComponent } from './detail-pax.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, IonicModule, RouterModule, DetailPaxRoutingModule
  ],
  declarations: [DetailPaxComponent],
})
export class DetailPaxModule { }
