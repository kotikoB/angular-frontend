import { Component, OnInit } from "@angular/core";
import { SearchService } from "../service/Search.service";

@Component({
  selector: "app-mini-statement",
  templateUrl: "./mini-statement.component.html",
  styleUrls: ["./mini-statement.component.css"],
})
export class MiniStatementComponent implements OnInit {
  isDone = false;
  isFailed = false;
  form: any = {};
  errorMessage;
  successMessage;
  transList:any;
  size;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  onSubmit() {
    console.log("values ", this.form.username, this.form.password);
    const data = {
      customerId: this.form.customerId,
      accountNo: this.form.accountNo,
    };
    this.searchService.searchStatement(data).subscribe(
      (resp) => {
        this.transList = resp;
        this.size = this.transList.length;
        this.isDone = true;
        this.successMessage = "Details found";
      },
      (err) => {
        console.log("failed", err);
        this.isFailed = true;
        this.errorMessage = "Failed. Try again";
      }
    );
  }
}
