import { Component, OnInit } from '@angular/core';
import {MD_TOOLBAR_DIRECTIVES, } from '@angular2-material/toolbar';
import { ROUTER_DIRECTIVES, Router  } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import {UserMenu} from 'meteor-angular2-accounts-material-ui';

const template = `
<md-toolbar>
  <h2>
    <a href="/"><span class="md-title">App</span></a>
  </h2>
  <span flex></span>
    <user-menu></user-menu>
</md-toolbar>
`;

@Component({
    selector: 'navbar',
    directives: [ROUTER_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, UserMenu],
    template
})
export class Navbar implements OnInit {
    constructor() { }

    ngOnInit() { }

}