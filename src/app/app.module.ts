import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";

import { TransactionsComponent } from "./transactions/transactions.component";
import { CustomersComponent } from "./customers/customers.component";
import { AccountBalanceComponent } from "./account-balance/account-balance.component";
import { FullLayoutComponent } from "./layout/full-layout/full-layout.component";
import { FormsModule } from "@angular/forms";
import { CreateWebuserComponent } from "./create-webuser/create-webuser.component";
import { MiniStatementComponent } from "./mini-statement/mini-statement.component";
import { SearchComponent } from "./search/search.component";

import { JwtInterceptor } from "./service/JwtInterceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    TransactionsComponent,
    CustomersComponent,
    AccountBalanceComponent,
    FullLayoutComponent,
    CreateWebuserComponent,
    MiniStatementComponent,
    SearchComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
