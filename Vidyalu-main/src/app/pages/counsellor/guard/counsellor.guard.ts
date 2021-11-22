import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../../service/service.service';

@Injectable({
  providedIn: 'root'
})
export class CounsellorGuard implements CanActivate {

  constructor(private service:ServiceService, private router:Router){}

  canActivate():boolean {
    if (this.service.CounsellorLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
