import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-payment-select',
  templateUrl: './payment-select.component.html',
  styleUrls: ['./payment-select.component.scss']
})
export class PaymentSelectComponent implements OnInit {

  contacts: Contact[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.contacts.push({ name: 'Alex Espejo', phone: '987654321' });
    this.contacts.push({ name: 'Carlos Ramos', phone: '123456789' });
  }

  add(contact: Contact):void{
    this.router.navigateByUrl('/payments/add/contact/1');
  }

}
