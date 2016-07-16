import { provideRouter, RouterConfig } from '@angular/router';
import {routes as AUTH_ROUTES} from '../auth/routes';
import {PartiesList} from '../parties-list/parties-list';

const routes: RouterConfig = [
    ...AUTH_ROUTES,
    { path: '', component: PartiesList }
];

export const appRouterProviders = [
    provideRouter(routes)
];