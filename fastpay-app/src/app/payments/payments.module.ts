import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSelectComponent } from './payment-select/payment-select.component';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add/contact-select', component: PaymentSelectComponent },
  { path: 'add/contact/:contactId', component: PaymentAddComponent }
];

@NgModule({
  declarations: [
    PaymentSelectComponent,
    PaymentAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentsModule { }
