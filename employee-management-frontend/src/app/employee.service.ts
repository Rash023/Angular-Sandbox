import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl="http://localhost:8080/api/v1/employee"
  constructor(private httpClient:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`)
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/add`,employee)
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${id}`, employee);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
} 
