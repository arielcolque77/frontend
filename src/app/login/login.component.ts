import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../core/services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  private returnUrl:string = '';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password:['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formInputs(){
    return this.loginForm.controls;
  }

  solicitarAcceso = () => {
    if (this.loginForm.invalid) {
      return;
    }
    let email = this.formInputs.email.value;
    let password = this.formInputs.password.value;
    this.auth.login(email, password).subscribe({
      next: data => {
        sessionStorage.setItem('userActual', JSON.stringify(data));
        sessionStorage.setItem('tokenAccess', JSON.stringify(data.token));
        this.router.navigate([this.returnUrl], {skipLocationChange:false});
      },
      error: err => {
        console.log(err)
      }
    });

  }

}
