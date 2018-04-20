import {Component, NgModule} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signinmodal.component.html',
  styleUrls: ['./signinmodal.component.scss']
})
export class SigninmodalComponent {

  password: string;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public dialogRef: MatDialogRef<SigninmodalComponent>,public router: Router) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  login() {
    this.dialogRef.close();
    this.router.navigateByUrl("/user");
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}

@NgModule({
  declarations: [SigninmodalComponent],
  imports: [],
  exports: []
})
export class SigninmodalstModule {
}
