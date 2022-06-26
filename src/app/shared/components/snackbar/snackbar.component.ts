import { Component, OnInit } from '@angular/core';
import {MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private _snackbarRef: MatSnackBarRef<SnackbarComponent>) { }

  ngOnInit(): void {
  }

  onCloseSnackBar() {
    this._snackbarRef.dismiss();
  }

}
