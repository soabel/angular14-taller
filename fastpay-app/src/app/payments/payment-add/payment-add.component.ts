import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.scss']
})
export class PaymentAddComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.toastr.info('Pago realizado');
    this.router.navigateByUrl('/');
  }

  back():void{
    this.router.navigateByUrl('/payments/add/contact-select');
  }

}
