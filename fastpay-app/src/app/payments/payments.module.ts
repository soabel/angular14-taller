import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSelectComponent } from './payment-select/payment-select.component';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PaymentPendingComponent } from './payment-pending/payment-pending.component';
import { ContactSelectComponent } from '../shared/contact-select/contact-select.component';
import { PaymentContactSelectComponent } from './payment-contact-select/payment-contact-select.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'add',
    component: PaymentSelectComponent,
    children: [
      { path: 'contact-select', component: PaymentContactSelectComponent },
      { path: 'payment-pending', component: PaymentPendingComponent }
    ]
  },
  { path: 'add/contact/:contactId', component: PaymentAddComponent }
];

@NgModule({
  declarations: [
    PaymentSelectComponent,
    PaymentAddComponent,
    PaymentPendingComponent,
    PaymentContactSelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ]
})
export class PaymentsModule { }
