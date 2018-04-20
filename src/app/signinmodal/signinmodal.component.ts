import {Component, NgModule} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signinmodal.component.html',
  styleUrls: ['./signinmodal.component.scss']
})
export class SigninmodalComponent {

  email: string;
  password: string;

  constructor(public dialogRef: MatDialogRef<SigninmodalComponent>,public router: Router) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  login() {
    this.dialogRef.close();
    this.router.navigateByUrl("/user");
  }
}

@NgModule({
  declarations: [SigninmodalComponent],
  imports: [],
  exports: []
})
export class SigninmodalstModule {
}
