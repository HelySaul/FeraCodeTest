import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

export class User {
  id: string;
  fullname: string;
  email: string;
  password: string;
  phone: number;
  registrationDate: string;
}

@Component({
  selector: 'app-userlogged',
  templateUrl: './userlogged.component.html',
  styleUrls: ['./userlogged.component.scss']
})
export class UserloggedComponent implements OnInit{

  user: User = new User();
  users: Observable<any[]>;

  constructor(public db: AngularFireDatabase, public snackBar: MatSnackBar, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = params['id'];
      this.users = this.db.list('/users').valueChanges();
      this.users.subscribe(usersList => {
        let userExists: boolean = false;
        usersList.forEach(user => {
          if (user.content.id == id){
            userExists = true;
            this.user = user.content;
          }
        });
        if (!userExists) {
          this.router.navigate(['']);
        }
      });
    });
  }

}

@NgModule({
  imports: [],
  exports: []
})
export class UserloggedModule {
}

