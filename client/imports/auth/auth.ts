import { Component, OnInit, Input } from '@angular/core';

import { NgForm }   from '@angular/forms';
import { Router , ROUTER_DIRECTIVES} from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { MeteorComponent } from 'angular2-meteor';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import template from './auth.html';
import {isFunction} from "@angular/compiler/src/facade/lang";


@Component({
    selector: 'auth',
    directives: [ ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
    template
})
export class Auth extends MeteorComponent implements OnInit {
    @Input() mode: string;

    error: string;

    modes = {
        login: {
            title: "Log In",
            description: "Sign in with your email",
            recover: true,
            login: false,
            signup: true,
            func: (credentials, cb)=>{
                return Meteor.loginWithPassword(credentials.email, credentials.password, cb);
            } },
        signup: {
            title: "Sign up",
            description: "Sign up with your email",
            recover: true,
            login: true,
            signup: false,
            func: (credentials, cb)=>{
                return  Accounts.createUser({email: credentials.email, password: credentials.password},cb);
            }
        },
        recover: {
            title: "Recover Password",
            description: "Enter your email to recover your password",
            recover: false,
            login: true,
            signup: true,
            func: (credentials, cb)=>{
                Accounts.forgotPassword({email: credentials.email},cb);
            }
        }
    };

    constructor(private router: Router) {
        super()
    }

    ngOnInit() {
    }

    isMode (mode) {
        return mode === this.mode;
    }

    onSubmit (credentials) {
        if (isFunction(this.modes[this.mode].func)) {
            this.modes[this.mode].func (credentials, (err) => {
                if (err) {
                    this.error = err;
                }
                else {
                    this.router.navigate(['/']);
                }
            });
        } else {
            console.log ('unidentified mode in auth');
        }

    }


}
