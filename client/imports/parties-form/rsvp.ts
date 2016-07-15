import 'reflect-metadata';
import { Pipe } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { Parties } from '../../../collections/parties.ts';
import { MeteorComponent } from 'angular2-meteor';


@Pipe({
  name: 'rsvp',
  pure: false
})
export class RsvpPipe extends MeteorComponent {
  init: boolean = false;
  total: number = 0;

  transform(party: Party, type: string): number {
    if (!type) {
      return 0;
    }

    if (!this.init) {
      this.autorun(() => {
        const found = Parties.findOne(party._id);
        if (found) {
          this.total = found.rsvps ?
            found.rsvps.filter(rsvp => rsvp.response === type).length : 0;
        }
      }, true);
      this.init = true;
    }

    return this.total;
  }
}
