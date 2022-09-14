import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Move } from 'src/app/models/move';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  model: any = {};
  balance: number = 150.0;
  showBalance = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // if (this.authService.authUser) {
    //   this.model.name = this.authService.authUser.name;
    // }

    if (sessionStorage.getItem('authUser') && sessionStorage.getItem('authUser') != '') {
      let authUser = JSON.parse(sessionStorage.getItem('authUser')!!);
      this.model.name = authUser.firstName;
    } else {
      this.router.navigate(['auth', {}]);
    }

  }

  pay():void{
    this.router.navigateByUrl('/payments/add/contact-select');
  }



}
