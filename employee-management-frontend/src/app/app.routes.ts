import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

export const routes: Routes = [
    {path:'employees',component:EmployeeListComponent},
    {path:'create-employee',component:CreateEmployeeComponent},
    {path:'update-employee/:id',component:UpdateEmployeeComponent},
    {path:'',redirectTo:'employees',pathMatch:'full'},

    
];
