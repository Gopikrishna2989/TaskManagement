import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { TaskListComponent } from '../task-list/task-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from '../header/header.component';

import { SidenavComponent } from '../sidenav/sidenav.component';
import { EmployComponent } from './employ/employ.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [
    IndexComponent,
    CreateTaskComponent,
    TaskListComponent,
    HeaderComponent,
    SidenavComponent,
    EmployComponent,
    WelcomeComponent,
    
    
   
    
  ],
  imports: [
    
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
   
    
    
  ]
})
export class IndexModule { }
