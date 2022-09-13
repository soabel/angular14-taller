import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = { userName: '', password: '' };
  urlRedirect?: string;
  constructor(private authService: AuthService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(param => {
      if (param.get('url') && param.get('url')!!.length > 0) {
        this.urlRedirect = param.get('url')!!;
      }
    });
  }

  onSubmit(): void {
    this.authService.login(this.model.userName, this.model.password)
      .subscribe(
        {
          next: (res: any) => {
            console.log('res', res);
            if(!this.urlRedirect){
              this.router.navigateByUrl('');
            }else{
              this.router.navigateByUrl(this.urlRedirect);
            }

          },
          error: (err: any) => console.error(err),
          complete: () => { }

        });
  }

}
