import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyrights',
  templateUrl: './copyrights.component.html',
  styleUrls: ['./copyrights.component.scss']
})
export class CopyrightsComponent implements OnInit {

  public year: number;

  constructor() {
    this.year = new Date().getFullYear()
  }

  ngOnInit(): void {
  }

}
