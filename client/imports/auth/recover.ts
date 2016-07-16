import { Component } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Router , ROUTER_DIRECTIVES} from '@angular/router';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Accounts } from 'meteor/accounts-base';

const template = `
<md-content layout="row" layout-align="center start" layout-fill layout-margin>
    <md-whiteframe layout="column" flex flex-md="50" flex-lg="50" flex-gt-lg="33" class="md-whiteframe-z2" layout-fill>
        <md-toolbar class="md-primary" color="primary">
            Recover Your Password
        </md-toolbar>
        <div layout="column" layout-fill layout-margin layout-padding>
            <form [ngFormModel]="recoverForm" #f="ngForm" (submit)="recover(f.value)" layout="column" layout-fill layout-padding layout-margin>
                <md-input type="text" ngControl="email" aria-label="email" placeholder="Email"></md-input>
                <div layout="row" layout-align="space-between center">
                    <button md-raised-button class="md-primary" type="submit" aria-label="login">Recover
                    </button>
                </div>
            </form>
            <div [hidden]="error == ''">
                <md-toolbar class="md-warn" layout="row" layout-fill layout-padding layout-margin>
                    <p class="md-body-1">{{ error }}</p>
                </md-toolbar>
            </div>
            <div layout="row" layout-align="center">
                <button md-button [routerLink]="['/Login']">Remember your password?</button>
            </div>
        </div>
    </md-whiteframe>
</md-content>
`;


@Component({
  selector: 'recover',
  directives: [ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  template,
})
export class Recover extends MeteorComponent {
  recoverForm: ControlGroup;
  error: string;

  constructor(private router: Router) {
    super();

    let fb = new FormBuilder();

    this.recoverForm = fb.group({
      email: ['', Validators.required]
    });

    this.error = '';
  }

  recover(credentials) {
    if (this.recoverForm.valid) {
      Accounts.forgotPassword({ email: credentials.email}, (err) => {
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
