import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthenticationService } from "../service/Authentication.service";

@Injectable({
  providedIn: "root",
})
export class AuthGaurdService implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = JSON.parse(this.authenticationService.getUser());
    // console.log("Stored ", currentUser);
    if (currentUser && currentUser["token"]) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
