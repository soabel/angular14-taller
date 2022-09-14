import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    console.log('CoreComponent - ngOnInit');

    if (sessionStorage.getItem('authUser') && sessionStorage.getItem('authUser') != '') {
      let authUser = JSON.parse(sessionStorage.getItem('authUser')!!);

      console.log(authUser);
      this.model.name = authUser.firstName;
    }
    // else {
    //   this.router.navigate(['auth', {}]);
    // }

  }


}
