import {Component, NgModule} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signupmodal.component.html',
  styleUrls: ['./signupmodal.component.scss']
})
export class SignupmodalComponent {

  private email: string;
  private password: string;

  constructor(public dialogRef: MatDialogRef<SignupmodalComponent>) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  login() {}

}

@NgModule({
  declarations: [SignupmodalComponent],
  imports: [FormsModule],
  exports: []
})
export class SigninmodalstModule {
}
