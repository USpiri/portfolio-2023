import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {
  FooterComponent,
  NavbarComponent,
  LoginComponent,
  LoginInputComponent,
  LoginMessageComponent,
  AdminModule,
} from './components';
import { MaterialModule } from '@shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '@shared/service/http-interceptor.service';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { PipesModule } from '@shared/pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    LoginInputComponent,
    LoginMessageComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    PipesModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
