import { Component }    from '@angular/core';
import {Auth}           from './auth';

const template = `
    <auth [mode]="mode"></auth>
`;

@Component({
  selector: 'recover',
  directives: [Auth],
  template ,
})
export class Recover {
  public mode: string = "recover";
}
