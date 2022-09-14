import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit {

  form = new FormGroup({
    'user': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });

  urlRedirect?: string;
  constructor(private authService: AuthService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(param => {
      if (param.get('url') && param.get('url')!!.length > 0) {
        this.urlRedirect = param.get('url')!!;
      }
    });

    this.form.setValue({ user: 'rcastro', password: '' });
  }

  onSubmit(): void {

    console.log(this.form.value);

    this.authService.login(this.form.value.user!!, this.form.value.password!!).subscribe(
      {
        next: (res) => {
          console.log(res);
          sessionStorage.setItem('authUser', JSON.stringify(res.usuario));

          if (!this.urlRedirect) {
            this.router.navigateByUrl('');
          } else {
            this.router.navigateByUrl(this.urlRedirect);
          }


        },
        error: (err) => { },
        complete: () => { }
      }
    );

  }

}
