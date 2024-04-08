import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

const appRoutes:Routes=[
  {path:"",component:EmployeeComponent},
  {path:'edit/:id',component:EmployeeEditComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
