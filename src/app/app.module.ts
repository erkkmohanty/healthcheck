import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { HealthComponent } from './health/health.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from "src/app/user/app-routing.module";
import { TokenInterceptor } from "src/app/auth/token.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi:true}],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
