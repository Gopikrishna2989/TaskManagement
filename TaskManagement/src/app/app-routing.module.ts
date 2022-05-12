import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './index/create-task/create-task.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'signup',component : SignupComponent},
{path:'login',component : LoginComponent},
{ path: 'index', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
{path:'signup',component : SignupComponent},
{path:'create-task',component : CreateTaskComponent}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
