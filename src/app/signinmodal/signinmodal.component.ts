import {Component, NgModule} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signinmodal.component.html',
  styleUrls: ['./signinmodal.component.scss']
})
export class SigninmodalComponent {

  email: string;
  password: string;

  constructor(public dialogRef: MatDialogRef<SigninmodalComponent>) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  login() {}
}

@NgModule({
  declarations: [SigninmodalComponent],
  imports: [],
  exports: []
})
export class SigninmodalstModule {
}
