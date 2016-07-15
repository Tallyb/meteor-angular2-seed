import 'reflect-metadata';
import { Pipe } from '@angular/core';
import { Meteor } from 'meteor/meteor';

@Pipe({
    name: 'userDisplayName'
})
export class UserDisplayName {
    transform(user: Meteor.User): string {
        if (!user) {
            return '';
        }

        if (user.username) {
            return user.username;
        }

        if (user.emails) {
            return user.emails[0].address;
        }

        return '';
    }
}

