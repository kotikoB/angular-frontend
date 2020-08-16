import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SearchService } from "../service/Search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
})
export class SearchComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  @Input() transType;

  values = "";
  isFound = false;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  onKey(key) {
    this.values = key;
    this.searchService.search(this.values, this.transType).subscribe(
      (res) => {
        this.isFound = true;
        this.messageEvent.emit(res);
      },
      (err) => {}
    );
  }
}
