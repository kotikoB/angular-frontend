import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "./../../environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {

  baseUrlWebUsers = `${environment.URL}/webusers/create`;

  constructor(private http: HttpClient) {}

  login(username, password) {
    return this.http
      .post<any>(
        `${environment.LOGIN_URL}/login`,
        { username, password },
        { observe: "response" }
      )
      .pipe(
        map((data: HttpResponse<any>) => {
          if (data.headers.get("authorization")) {
            const token = data.headers.get("authorization");
            const { sub } = helper.decodeToken(token);
            // console.log("jwt decode ", sub);
            this.setUser({ user: sub, token });
            return {
              status: true,
              role: sub,
            };
          }
        })
      );
  }

  setUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  getUser() {
    return localStorage.getItem("currentUser");
  }

  createWebUser(data){
    return this.http.post(this.baseUrlWebUsers,data).pipe(map((res) => res));
  }
}
