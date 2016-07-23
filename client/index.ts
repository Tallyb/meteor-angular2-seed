import {bootstrap} from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { App } from './imports/app/app';
import { appRouterProviders } from './imports/app/routes';
import {HTTP_PROVIDERS} from '@angular/http';

import 'ng2-material/ng2-material.css';

bootstrap(App, [
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS

]).catch(err => console.error(err));