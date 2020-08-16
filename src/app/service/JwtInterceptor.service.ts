import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

import { AuthenticationService } from "../service/Authentication.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(this.authenticationService.getUser());
    if (currentUser && currentUser["token"]) {
      const cloned = request.clone({
        setHeaders: {
          Authorization: "Bearer " + currentUser["token"],
        },
      });

      return next.handle(cloned);
    }
    return next.handle(request);
  }
}
