import { Component } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Router , ROUTER_DIRECTIVES} from '@angular/router';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdToolbar } from '@angular2-material/toolbar';
import { Meteor } from 'meteor/meteor';

const template = `
<md-content layout="row" layout-align="center start" layout-fill layout-margin>
    <md-whiteframe layout="column" flex flex-md="50" flex-lg="50" flex-gt-lg="33" class="md-whiteframe-z2" layout-fill>
        <md-toolbar class="md-primary" color="primary">
            Sign in
        </md-toolbar>
        <div layout="column" layout-fill layout-margin layout-padding>
            <div layout="row" layout-fill layout-margin>
                <p class="md-body-2"> Sign in with your email</p>
            </div>

            <form [ngFormModel]="loginForm" #f="ngForm" (submit)="login(f.value)" layout="column" layout-fill
                  layout-padding layout-margin>
                <md-input ngControl="email" placeholder="Email" aria-label="email"></md-input>
                <md-input type="password" placeholder="Password" ngControl="password" aria-label="password"></md-input>

                <div layout="row" layout-align="space-between center">
                    <button md-button [routerLink]="['/Recover']">Forgot password?</button>
                    <button md-raised-button class="md-primary" type="submit" aria-label="login">Sign In
                    </button>
                </div>
            </form>
            <div [hidden]="error == ''">
                <md-toolbar class="md-warn" layout="row" layout-fill layout-padding layout-margin>
                    <p class="md-body-1">{{ error }}</p>
                </md-toolbar>
            </div>
            <md-divider></md-divider>
            <div layout="row" layout-align="center">
                <button md-button [routerLink]="['/Signup']">Need an account?</button>
            </div>
        </div>
    </md-whiteframe>
</md-content>


`;

@Component({
  selector: 'login',
  directives: [ ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES, MdToolbar],
  template ,
})
export class Login extends MeteorComponent {
  loginForm: ControlGroup;
  error: string;

  constructor(private router: Router) {
    super();

    let fb = new FormBuilder();

    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error = '';
  }

  login(credentials) {
    if (this.loginForm.valid) {
      Meteor.loginWithPassword(credentials.email, credentials.password, (err) => {
        if (err) {
          this.error = err;
        }
        else {
          this.router.navigate(['/PartiesList']);
        }
      });
    }
  }
}
