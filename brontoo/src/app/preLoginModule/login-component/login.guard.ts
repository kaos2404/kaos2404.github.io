import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(public service: LocalStorageService, public router: Router){}
  canActivate(route: ActivatedRouteSnapshot, routerstate: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.service.getUser() !== null){
      this.router.navigate(['/home']);
    }
    return true;
  }
}
