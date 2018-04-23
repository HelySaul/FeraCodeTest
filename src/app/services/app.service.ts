import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService{

  constructor(private http: Http) {
  }

  public getJSON(): Observable<any> {
    return this.http.get("/assets/files/diapers.json").map((res:any) => res.json());
  }
}
