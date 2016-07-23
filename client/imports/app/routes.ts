import { provideRouter, RouterConfig } from '@angular/router';
import {Main} from '../main/main';
import {AUTH_ROUTES} from 'meteor-angular2-accounts-material-ui';

const routes: RouterConfig = [
    ...AUTH_ROUTES,
    { path: '', component: Main }
];

export const appRouterProviders = [
    provideRouter(routes)
];