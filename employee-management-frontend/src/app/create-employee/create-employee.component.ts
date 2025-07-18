import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
    employee:Employee=new Employee();
    constructor(private employeeService:EmployeeService,private router:Router){}
    ngOnInit(): void {
    

    }

    saveEmployee(){
      this.employeeService.createEmployee(this.employee).subscribe(data=>{
        console.log("success");
        this.goToEmployeeList();
      },
      error=>console.log(error))
    }
    
    goToEmployeeList(){
      this.router.navigate(['/employees'])
    }
    onSubmit(){
      this.saveEmployee();
    }
}
