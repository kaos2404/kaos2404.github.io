import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  idleTime: number = 60;
  timeoutTime: number = 30;
  options: string[] = ['One', 'Two', 'Three'];
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
