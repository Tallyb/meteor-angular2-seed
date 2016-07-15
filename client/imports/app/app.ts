import 'reflect-metadata';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MeteorComponent} from 'angular2-meteor';
import { Component, provide } from '@angular/core';
import { ROUTER_DIRECTIVES, Router  } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import '../../../collections/methods.ts';
import {UserMenu} from '../auth/user.menu';


const template =  `
    <md-toolbar>
  <h2>
    <a href="/parties"><span class="md-title">App</span></a>
  </h2>
  <span flex></span>
  <div layout="row">
    <div [hidden]="user">
      <button md-button [routerLink]="['/Login']" >Login</button>
      <button md-button [routerLink]="['/Signup']">Sign up</button>
    </div>
    <div [hidden]="!user">
      <span>{{ user | displayName }}</span>
      <button md-button (click)="logout()">Logout</button>
    </div>
  </div>
</md-toolbar>
<router-outlet flex-gt-sm layout-gt-sm="row"></router-outlet>
`;


@Component({
  selector: 'app',
  template,
    directives: [MD_TOOLBAR_DIRECTIVES],
})

export class App extends MeteorComponent {

    constructor() {
        super();
    }
}