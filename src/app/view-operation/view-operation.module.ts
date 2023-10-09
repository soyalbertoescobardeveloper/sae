import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewOperationComponent } from './view-operation.component';
import { ViewOperationRoutingModule } from './view-operation-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { DetailPaxModule } from '../detail-pax/detail-pax.module';

@NgModule({
  declarations: [ViewOperationComponent],
  imports: [
    CommonModule, FormsModule, IonicModule, RouterModule, ViewOperationRoutingModule,
    HttpClientModule, DetailPaxModule
  ]
})
export class ViewOperationModule { }
