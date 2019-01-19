import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public service: LocalStorageService, public router: Router){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.userNameValidator.bind(this)]),
      'password': new FormControl(null, [Validators.required, this.passwordValidator.bind(this)])
      //'password': new FormControl(null)
    })
  }

  onSubmit(){
    this.service.login(this.loginForm.get('username').value);
  }

  userNameValidator(formControl: FormControl): {[s: string]: boolean} {
    if(formControl.value !== null && (formControl.value.match(this.service.emailPattern) || formControl.value.match(this.service.numberPattern))){
          return null;
    }
    return {'isInValid': true};
  }

  passwordValidator(formControl: FormControl): {[s: string]: boolean} {
    if(formControl.value !== null && formControl.value.match(this.service.passwordPattern)){
      return null;
    }
    return {'isInValid': true};
  }
}
