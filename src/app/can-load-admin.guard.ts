import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadAdminGuard implements CanLoad {
  constructor(private userService: UserService) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.currentUser.isAdmin;
  }
}
