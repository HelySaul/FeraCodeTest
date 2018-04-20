import {Component} from '@angular/core';
import {MatDialog, MatSnackBar} from "@angular/material";
import {SigninmodalComponent} from './signinmodal/signinmodal.component';
import {SignupmodalComponent} from "./signupmodal/signupmodal.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) {}

  openSignInModal(): void {
    let dialogRef = this.dialog.open(SigninmodalComponent, {
      width: '270px',
    });
  }

  openSignUpModal(): void {
    let dialogRef = this.dialog.open(SignupmodalComponent, {
      width: '250px',
    });
  }

}

