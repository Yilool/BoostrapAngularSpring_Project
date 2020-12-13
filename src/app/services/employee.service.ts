import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeRoute: string;

  constructor( private http: HttpClient ) { 
    this.employeeRoute = 'http://localhost:8080/empresa/';
  }

  public postEmployee(employeeParam: Employee) {
    return this.http.post<Employee>(this.employeeRoute, employeeParam);
  }

  public async getAllEmployee(): Promise<any> {
    let employees: any = await this.http.get(this.employeeRoute).toPromise();

    return employees;
  }

  public async getEmployee(prdId: number): Promise<any> {
    let employee: any = await this.http.get(this.employeeRoute + "/" + prdId).toPromise();

    return employee;
  }

  public async delemployee(prdId: number): Promise<any> {
    let employee: any = await this.http.delete(this.employeeRoute + "/" + prdId).toPromise();

    return employee;
  }
}
