import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-news-letter',
    templateUrl: './news-letter.component.html',
    styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {

    emailFormControl = new FormControl('', [Validators.email]);

    constructor() { }

    ngOnInit(): void {
    }

}
