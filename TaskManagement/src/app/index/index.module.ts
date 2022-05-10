import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { TaskListComponent } from '../task-list/task-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TaskListComponent } from './task-list/task-list.component';
//import { DatatableComponent } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    IndexComponent,
    CreateTaskComponent,
    TaskListComponent
  ],
  imports: [
    
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
   
    
    
  ]
})
export class IndexModule { }
