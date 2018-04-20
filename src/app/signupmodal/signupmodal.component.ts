import {Component, NgModule} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormControl, FormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signupmodal.component.html',
  styleUrls: ['./signupmodal.component.scss']
})
export class SignupmodalComponent {

  constructor(public dialogRef: MatDialogRef<SignupmodalComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}

@NgModule({
  declarations: [SignupmodalComponent],
  imports: [FormsModule],
  exports: []
})
export class SigninmodalstModule {
}
