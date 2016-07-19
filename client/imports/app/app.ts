import 'reflect-metadata';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MeteorComponent} from 'angular2-meteor';
import { Component, provide } from '@angular/core';
import { ROUTER_DIRECTIVES, Router  } from '@angular/router';

import { Meteor } from 'meteor/meteor';

import '../../../collections/methods.ts';
import {PartiesList} from '../parties-list/parties-list';
import {Navbar} from '../navbar/navbar';

const template =  `
<navbar></navbar>
<router-outlet></router-outlet>
`;


@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES, PartiesList, Navbar],
})

export class App extends MeteorComponent {
    constructor() {
        super();
    }
}