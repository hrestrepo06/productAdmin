import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FortgotPasswordPage } from './fortgot-password.page';

const routes: Routes = [
  {
    path: '',
    component: FortgotPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortgotPasswordPageRoutingModule {}
