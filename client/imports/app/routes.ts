import { provideRouter, RouterConfig } from '@angular/router';
import {routes as AUTH_ROUTES} from '../auth/routes';

const routes: RouterConfig = [
    ...AUTH_ROUTES
];

export const appRouterProviders = [
    provideRouter(routes)
];