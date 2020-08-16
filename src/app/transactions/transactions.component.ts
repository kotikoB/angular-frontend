import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  transList: any;
  errorMsg;
  transType = "transaction"

  constructor() {}

  ngOnInit() {}

  receiveTransList($event) {
    console.log("received event ", $event);
    if ($event.length > 0) {
      this.transList = $event;
    }
    this.errorMsg = $event
  }
}
