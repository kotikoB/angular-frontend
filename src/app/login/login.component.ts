import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../service/Authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  form: any = {};
  errorMessage;
  roles;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  onSubmit() {
    console.log("values ", this.form.username, this.form.password);
    this.authenticationService
      .login(this.form.username, this.form.password)
      .subscribe(
        (resp) => {
          console.log("status ", resp.status);
          this.isLoggedIn = resp.status;
          this.roles = resp.role;
        },
        (err) => {
          console.log("failed", err);
          this.isLoginFailed = true;
          this.errorMessage = "Wrong Credentials. Try again";
        }
      );
  }
}
