import {
    bootstrap
} from '@angular/platform-browser-dynamic';

import {
    App
} from './imports/app/app';
import {
    appRouterProviders
} from './imports/app/routes';

import 'ng2-material/ng2-material.css';

bootstrap(App, [
    appRouterProviders
]).catch(err => console.error(err));