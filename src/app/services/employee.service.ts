import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  private employeeRoute: string;

  constructor( private http: HttpClient ) { 
    this.employeeRoute = 'http://localhost:8080/empresa/employee';
  }

  public postEmployee(employeeParam: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeRoute, employeeParam, this.httpOptions);
  }

  public async getAllEmployee(): Promise<any> {
    let employees: any = await this.http.get(this.employeeRoute).toPromise();

    return employees;
  }

  public async getEmployee(empId: number): Promise<any> {
    let employee: any = await this.http.get(this.employeeRoute + "/" + empId).toPromise();

    return employee;
  }

  public delEmployee(empId: number): Observable<Employee> {
    let employee: any = this.http.delete(this.employeeRoute + "/" + empId, { responseType: 'text' });

    return employee;
  }
}
