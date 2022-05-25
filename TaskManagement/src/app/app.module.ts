import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
 import { NgxDatatableModule } from '@swimlane/ngx-datatable';
 import{HttpClientModule} from'@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

  



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ModalComponent,
  
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
