import { Component }    from '@angular/core';
import {Auth}           from './auth';

const template = `
    <auth [mode]="mode"></auth>
`;

@Component({
  selector: 'signup',
  directives: [Auth],
  template ,
})
export class Signup {
  public mode: string = "signup";
}
