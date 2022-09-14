import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-payment-contact-select',
  templateUrl: './payment-contact-select.component.html',
  styleUrls: ['./payment-contact-select.component.scss']
})
export class PaymentContactSelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  add(event: any):void{
    this.router.navigateByUrl('/payments/add/contact/1');
  }


}
