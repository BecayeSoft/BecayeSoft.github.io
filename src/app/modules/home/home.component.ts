import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    nloop: number[] = Array(3).fill(0).map((x, i) => i);

    constructor() { }

    ngOnInit(): void {
    }

}
