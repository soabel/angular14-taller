import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Move } from 'src/app/models/move';
import { AccountService } from 'src/app/services/account.service';
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
  userId = 0;
  constructor(private authService: AuthService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    // if (this.authService.authUser) {
    //   this.model.name = this.authService.authUser.name;
    // }

    if (sessionStorage.getItem('authUser') && sessionStorage.getItem('authUser') != '') {
      let authUser = JSON.parse(sessionStorage.getItem('authUser')!!);
      this.model.name = authUser.firstName;
      this.userId = authUser.id;
    } else {
      this.router.navigate(['auth', {}]);
    }

    this.getBalance();

  }

  pay(): void {
    this.router.navigateByUrl('/payments/add/contact-select');
  }

  getBalance(): void {
    this.accountService.getAccount(this.userId).subscribe(
      {
        next: (res) => {
          this.balance = res.balance!!;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => { }
      }
    );
  }



}
