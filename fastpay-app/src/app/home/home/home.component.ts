import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // if (this.authService.authUser) {
    //   this.model.name = this.authService.authUser.name;
    // }

    if (sessionStorage.getItem('authUser')) {
      let authUser = JSON.parse(sessionStorage.getItem('authUser')!!);
      this.model.name = authUser.name;
    }




  }

}
