import 'reflect-metadata';
import {MeteorComponent} from 'angular2-meteor';
import { Component, provide } from '@angular/core';
import { ROUTER_DIRECTIVES, Router  } from '@angular/router';
import {MdIconRegistry } from '@angular2-material/icon';
import { Meteor } from 'meteor/meteor';

import '../../../collections/methods.ts';
import {Navbar} from '../navbar/navbar';

const template =  `
<navbar></navbar>
<router-outlet></router-outlet>
`;


@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES, Navbar],
  providers: [MdIconRegistry]
})

export class App extends MeteorComponent {
    constructor(mdIconRegistry: MdIconRegistry) {
        super();
        mdIconRegistry. addSvgIconSetInNamespace('mdi', '/mdi.svg');
    }
}