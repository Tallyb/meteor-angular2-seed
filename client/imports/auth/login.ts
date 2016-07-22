import { Component }    from '@angular/core';
import {Auth}           from './auth';

const template = `
    <auth [mode]="mode"></auth>
`;

@Component({
  selector: 'login',
  directives: [Auth],
  template ,
})
export class Login {
    public mode: string = "login";
}
