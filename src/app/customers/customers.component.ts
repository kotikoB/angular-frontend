import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent implements OnInit {
  transList: any;
  transType = "customer";
  constructor() {}

  ngOnInit() {}

  receiveTransList($event) {
    console.log("received event customer", $event);
    if ($event.length > 0) {
      this.transList = $event;
    }
  }
}
