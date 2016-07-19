import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Router , ROUTER_DIRECTIVES} from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { MeteorComponent } from 'angular2-meteor';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

const template = `
<md-content layout="row" layout-align="center start" layout-fill layout-margin>
    <div layout="column" flex flex-md="50" flex-lg="50" flex-gt-lg="33" class="md-whiteframe-z2">
        <md-toolbar class="md-primary" color="primary">
            Sign in
        </md-toolbar>
        <div layout="row" layout-margin>
            <p class="md-body-2"> Sign in with your email</p>
        </div>

        <form #f="ngForm" (submit)="onSubmit(f.value)" layout="column" layout-padding layout-margin>
            <md-input ngModel type="text" name="email" placeholder="Email" aria-label="email" required></md-input>
            <md-input ngModel type="password" name="password" placeholder="Password" aria-label="password" required></md-input>

            <div layout="row" layout-align="space-between center">
                <button md-button [routerLink]="['/Recover']">Forgot password?</button>
                <button md-raised-button class="md-primary" type="submit" aria-label="login" [disabled]="!f.valid">Sign In
                </button>
            </div>
        </form>
        <div [hidden]="!error">
            <md-toolbar class="md-warn" layout="row" layout-fill layout-padding layout-margin>
                <p class="md-body-1">{{ error }}</p>
            </md-toolbar>
        </div>
        <md-divider></md-divider>
        <div layout="row" layout-align="center">
            <button md-button [routerLink]="['/signup']">Need an account?</button>
        </div>
    </div>
</md-content>
`;

@Component({
  selector: 'login',
  directives: [ ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  template ,
})
export class Login extends MeteorComponent {
  error: string;


  constructor(private router: Router) {
    super();
  }

  onSubmit (credentials) {
      Meteor.loginWithPassword(credentials.email, credentials.password, (err) => {

          if (err) {
              this.error = err;
          }
          else {
              this.router.navigate(['/']);
          }
      });

  }
}
