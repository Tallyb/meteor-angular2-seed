import { RouterConfig } from '@angular/router';
import {Login} from './login';
import {Signup} from './signup';
import {Recover} from './recover';


export const routes: RouterConfig = [
    { path: 'login', component: Login },
    { path: 'signup',  component: Signup },
    { path: 'recover', component: Recover }
];

