import {Component, NgModule} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signinmodal.component.html',
  styleUrls: ['./signinmodal.component.scss']
})
export class SigninmodalComponent {

  private user: string;
  private email: string;
  private phone: string;
  private password: string;

  constructor(public dialogRef: MatDialogRef<SigninmodalComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@NgModule({
  declarations: [SigninmodalComponent],
  imports: [],
  exports: []
})
export class SigninmodalstModule {
}
