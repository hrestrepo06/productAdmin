import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FortgotPasswordPageRoutingModule } from './fortgot-password-routing.module';
import { FortgotPasswordPage } from './fortgot-password.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FortgotPasswordPageRoutingModule,
    SharedModule
  ],
  declarations: [FortgotPasswordPage]
})
export class FortgotPasswordPageModule {}
