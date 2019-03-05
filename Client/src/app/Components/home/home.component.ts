import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    fields: Array<string> = [];

    constructor() { }

    ngOnInit() {
        localStorage['Study field'] = 'Development';
        this.fields.push('Development');
        this.fields.push('Javascript');
        this.fields.push('C#');
        this.fields.push('C++');
    }

    changeState(event) {
        alert(event.target.value);
        localStorage['Study field'] = event.target.value;
    }
}
