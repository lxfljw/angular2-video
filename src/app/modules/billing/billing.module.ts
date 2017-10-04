import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingRoutes } from './billing.routes';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing.component';
import { BillingService } from './service/billing.service';

let page = [
  BillingComponent

];



@NgModule({
  declarations: [
    ...page
  ],
  imports: [

    CommonModule,
    BillingRoutes
  ],
  providers: [BillingService]
})
export class BillingModule { };
