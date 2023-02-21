import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { InfoUsuarioService } from '../services/info-usuario.service';

@Injectable({
  providedIn: 'root',
})
export class IniciadoGuardGuard implements CanActivate {
  constructor(protected serv: InfoUsuarioService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.serv.getIniciado()) {
      return true;
    }

    this.router.navigate(['inicio']);
    return false;
  }
}
