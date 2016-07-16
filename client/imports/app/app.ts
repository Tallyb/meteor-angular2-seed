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
    <user-menu></user-menu>
</md-toolbar>
<router-outlet flex-gt-sm layout-gt-sm="row"></router-outlet>
`;


@Component({
  selector: 'app',
  template,
    directives: [ROUTER_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, UserMenu],
})

export class App extends MeteorComponent {

    constructor() {
        super();
    }
}