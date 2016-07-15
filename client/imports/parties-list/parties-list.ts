import { Component }   from '@angular/core';
import { Parties }     from '../../../collections/parties';
import { PartiesForm } from '../parties-form/parties-form';
import { Mongo }       from 'meteor/mongo';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { MeteorComponent } from 'angular2-meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { PaginationService, PaginatePipe, PaginationControlsCmp } from 'angular2-pagination';
import { RsvpPipe } from '../parties-form/rsvp.ts';
import { Meteor } from 'meteor/meteor';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
  selector: 'parties-list',
  viewProviders: [PaginationService],
  templateUrl: '/client/imports/parties-list/parties-list.html',
  directives: [PartiesForm, ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES],
  pipes: [PaginatePipe, RsvpPipe]
})
//@InjectUser()
export class PartiesList extends MeteorComponent{
  parties: Mongo.Cursor<Party>;
  pageSize: number = 10;
  curPage: ReactiveVar<number> = new ReactiveVar<number>(1);
  nameOrder: ReactiveVar<number> = new ReactiveVar<number>(1);
  partiesSize: number = 0;
  location: ReactiveVar<string> = new ReactiveVar<string>(null);
  user: Meteor.User;

  constructor() {
    super();

    this.autorun(() => {
      let options = {
        limit: this.pageSize,
        skip: (this.curPage.get() - 1) * this.pageSize,
        sort: { name: this.nameOrder.get() }
      };

      this.subscribe('parties', options, this.location.get(), () => {
        this.parties = Parties.find({}, { sort: { name: this.nameOrder.get() } });
      }, true);
    });

    this.autorun(() => {
      this.partiesSize = Counts.get('numberOfParties');
    }, true);
  }

  removeParty(party) {
    Parties.remove(party._id);
  }

  search(value: string) {
    this.curPage.set(1);
    this.location.set(value);
  }

  changeSortOrder(nameOrder: string) {
    this.nameOrder.set(parseInt(nameOrder));
  }

  onPageChanged(page: number) {
    this.curPage.set(page);
  }

  isOwner(party: Party): boolean {
    if (this.user) {
      return this.user._id === party.owner;
    }

    return false;
  }
}
