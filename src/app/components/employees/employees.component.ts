import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeFormContent: FormGroup;
  employees: Employee[];
  employee: Employee;
  loading: boolean

  constructor(private formBuilder: FormBuilder, private empService: EmployeeService) {
    this.employee = {
      empName: null,
      empSurname: null,
    };
    this.loading = true;
  }

  ngOnInit(): void {
    this.employeeFormContent = this.formBuilder.group({
      id: [''],
      nombre: [''],
      apellido: [''],
    });
  }
  // Employee CRUD caling service method which use endpoint for get and give data

  //Create employee function
  onPost() {
    this.employee.empName = this.employeeFormContent.get('nombre').value;
    this.employee.empSurname = this.employeeFormContent.get('apellido').value;
    
    this.empService.postEmployee(this.employee).subscribe((response) => {
      alert('Empleado creado!');
      console.log(response);
    });
    
    this.loading = false;
    this.employeeFormContent.reset();
  }
  
  //Get all employee function
  async onGets() {
    this.employees = await this.empService.getAllEmployee()
    this.loading = false;
    this.employeeFormContent.reset();
  }
  
  //Get employee function by id
  async onGet() {
    let id = this.employeeFormContent.get('id').value
    this.employee = await this.empService.getEmployee(id);
    this.loading = false;
    this.employeeFormContent.reset();
  }

  //Delete employee function by id
  onDel() {
    let id = this.employeeFormContent.get('id').value
    let res = confirm(`¿Seguro que desea borrar el empleado con id ${id}?`);

    if (res) {
      this.empService.delEmployee(id).subscribe((response) => {
      alert('!Empleado Borrado!');
      console.log(response);
    });
    } else {
      alert('!Operación cancelada!');
    }
    
    this.loading = false;
    this.employeeFormContent.reset();
  }
}
