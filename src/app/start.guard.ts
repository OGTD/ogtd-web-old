import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RouterStore } from './stores/router.store';
import { OGTDStore } from './stores/ogtd.store';

@Injectable()
export class StartGuard implements CanActivate {
  constructor(private router: RouterStore, private ogtd: OGTDStore) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.ogtd.started) {
      return true;
    }
    this.router.navigate('/start');
    return false;
  }
}
