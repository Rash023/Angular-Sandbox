import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})


export class UpdateEmployeeComponent implements OnInit {

  id: number | any;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}