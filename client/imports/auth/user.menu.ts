import { Component, OnInit } from '@angular/core';
import {LoginButtons} from 'angular2-meteor-accounts-ui';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Meteor } from 'meteor/meteor';
import {MeteorComponent} from 'angular2-meteor';
import {UserDisplayName} from './display.name.pipe';


@Component({
    selector: 'user-menu',
    template: `
          <div layout="row">
            <div [hidden]="user">
              <button md-button [routerLink]="['/login']" >Login</button>
              <button md-button [routerLink]="['/signup']">Sign up</button>
            </div>
            <div [hidden]="!user">
              <span>{{ user | userDisplayName }}</span>
              <button md-button (click)="logout()">Logout</button>
            </div>
          </div>
`,
    directives: [ROUTER_DIRECTIVES, LoginButtons],
    pipes: [UserDisplayName]
})

@InjectUser('user')

export class UserMenu extends MeteorComponent {
    user: Meteor.User;

    constructor() {
        super();
    }

    logout() {
        this.autorun(() => {
            Meteor.logout();
        });
    }
}

