import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';

import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { DashComponent } from './components/dash/dash.component';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

var externalsImports = [
  InputTextModule,
  InputMaskModule,
  PasswordModule,
  ChartModule,
  DividerModule,
  ToolbarModule,
  ButtonModule,
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    BackofficeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    externalsImports,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
