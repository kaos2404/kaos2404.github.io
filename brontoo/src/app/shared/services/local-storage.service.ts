import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  idleTime: number = 60;
  timeoutTime: number = 30;
  options: string[] = ['One', 'Two', 'Three'];

  usernamePattern=/(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)|(^[6-9][0-9]{9}$)/;
  emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  numberPattern = /^[6-9][0-9]{9}$/;
  passwordPattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  progressBar: boolean = false;
  constructor(public router: Router){}
  login(userid: string){
    localStorage.setItem('userid', userid);
    this.router.navigate(['/home']);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  getUser(): string {
    return localStorage.getItem('userid');
  }
}
