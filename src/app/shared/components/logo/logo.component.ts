import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() tailwind_classes = 'w-32 h-32 rounded-full ml-5 mr-4'

  constructor() { }

  ngOnInit(): void {
  }

}
