import {Component, OnInit} from '@angular/core';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';

const template = `
    <div> Here will go the app</div>
    <md-icon svgIcon="mdi:delete"></md-icon>
`;


@Component({
    selector: 'main',
    directives: [MD_ICON_DIRECTIVES],
    template
})
export class Main implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
