import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  reponse: any;
  constructor(private service: LoginService) {
    localStorage.clear();
  }
  ngOnInit(): void {
  }

  loginform = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  Login() {
    if (this.loginform.valid) {
      this.service.Login(this.loginform.value).subscribe(result => {
        this.reponse = result;
        if (this.reponse != null) {
          this.service.updatemenu.next();
        } else {
          alert("Verifier votre Login !");
        }
      });
    }
  }
}
