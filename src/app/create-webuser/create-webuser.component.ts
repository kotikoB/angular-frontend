import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../service/Authentication.service";

@Component({
  selector: "app-create-webuser",
  templateUrl: "./create-webuser.component.html",
  styleUrls: ["./create-webuser.component.css"],
})
export class CreateWebuserComponent implements OnInit {
  isDone = false;
  isFailed = false;
  form: any = {};
  errorMessage;
  successMessage;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  onSubmit() {
    console.log("values ", this.form.username, this.form.password);
    const data = {
      username: this.form.username,
      password: this.form.password,
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      email: this.form.email,
      customerId: this.form.customerId,
      employeeId: this.form.employeeId,
    };
    this.authenticationService.createWebUser(data).subscribe(
      (resp) => {
        this.isDone = true;
        this.successMessage = "User created"
      },
      (err) => {
        console.log("failed", err);
        this.isFailed = true;
        this.errorMessage = "Failed. Try again";
      }
    );
  }
}
