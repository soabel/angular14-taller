import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-payment-select',
  templateUrl: './payment-select.component.html',
  styleUrls: ['./payment-select.component.scss']
})
export class PaymentSelectComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  back():void{
    this.router.navigateByUrl('/');
  }


}
