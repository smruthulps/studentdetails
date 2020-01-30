import { CreateComponent } from './create/create.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:"",component:ListStudentComponent},{
  path:"create",component:CreateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
