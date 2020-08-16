import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  baseUrlTrans = `${environment.URL}/transactions/`;
  baseUrlMinistatement = `${environment.URL}/transactions/mini-statement`;
  baseUrlCustomers = `${environment.URL}/customers/`;
  baseUrlAccounts = `${environment.URL}/accounts/`;

  constructor(private http: HttpClient) {}

  search(key, type) {
    console.log("key ", key, "Type ", type);

    switch (type) {
      case "transaction":
        return this.searchTrans(key);
      case "customer":
        return this.searchAccount(key);
      case "account":
        return this.searchBalance(key);
      case "statement":
        return this.searchStatement(key);
    }
  }

  // asyncSearch(terms, type) {
  //   console.log("key ", terms, "Type ", type);
  //   return terms
  //     .debounceTime(500)
  //     .distinctUntilChanged()
  //     .switchMap((term) => this.searchTrans(term));
  // }

  searchTrans(term) {
    console.log("trans");
    return this.http.get(this.baseUrlTrans + term).pipe(map((res) => res));
  }

  searchCustomer(term) {
    return this.http.get(this.baseUrlCustomers + term).pipe(map((res) => res));
  }

  searchAccount(term) {
    return this.http.get(this.baseUrlAccounts + term).pipe(map((res) => res));
  }

  searchStatement(term) {
    return this.http
      .post(this.baseUrlMinistatement, term)
      .pipe(map((res) => res));
  }

  searchBalance(term) {
    const data = { customerId: term };
    return this.http
      .get(this.baseUrlAccounts + "balance")
      .pipe(map((res) => res));
  }
}
