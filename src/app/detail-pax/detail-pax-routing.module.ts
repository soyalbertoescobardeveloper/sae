import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DetailPaxComponent} from './detail-pax.component';
const routes: Routes = [
  {
    path: '',
    component: DetailPaxComponent
  }
];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class DetailPaxRoutingModule { }
