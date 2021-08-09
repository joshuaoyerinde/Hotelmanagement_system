import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { NOTFOUND } from 'dns';
import { Observable } from 'rxjs';
import { StaffService } from '../services/staff.service';

@Injectable({
  providedIn: 'root'
})
export class StaffbeforeenterGuard implements CanActivate {
   constructor(
     public route: Router,
     public staffservice: StaffService
   ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const tokenize = localStorage.getItem('x-admin');
      // let uu = 5;
      if (!this.staffservice.isAdminLogin()){
        this.route.navigate(['admin-login']);
        return false;
      }else{
        return true;
      }
  }
  
}
