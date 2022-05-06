import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
 import { NgxDatatableModule } from '@swimlane/ngx-datatable';
 import { DatatableComponent } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    DatatableComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
