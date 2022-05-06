import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule
  ]
})
export class IndexModule { }
