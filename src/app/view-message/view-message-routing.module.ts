import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ViewMessagePage } from './view-message.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule],
})
export class ViewMessagePageRoutingModule {}
