import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-account-balance",
  templateUrl: "./account-balance.component.html",
  styleUrls: ["./account-balance.component.scss"],
})
export class AccountBalanceComponent implements OnInit {
  transList: any;
  transType = "account";
  constructor() {}

  ngOnInit() {}

  receiveTransList($event) {
    console.log("received event account", $event);
    if ($event.length > 0) {
      this.transList = $event;
    }
  }
}
