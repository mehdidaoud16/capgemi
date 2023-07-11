import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiurl = 'https://localhost:44308/comptes/'


  constructor(private http: HttpClient) { }

  private _updatemenu = new Subject<void>();
  get updatemenu() {
    return this._updatemenu;
  }
  Login(usercred: any) {
    return this.http.post(this.apiurl + 'Login', usercred);
  }
}
