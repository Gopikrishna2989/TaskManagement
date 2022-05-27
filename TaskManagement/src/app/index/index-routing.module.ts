import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { IndexComponent } from './index.component';
import { EmployComponent } from './employ/employ.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '' , component: IndexComponent,children:[
    { path: 'task-list', component: TaskListComponent },
    { path: 'employee', component: EmployComponent },
    { path: '', component: WelcomeComponent },


  ]},
 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
