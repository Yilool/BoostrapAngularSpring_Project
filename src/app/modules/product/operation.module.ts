import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { OperationComponent } from 'src/app/components/operation/operation.component';
import { EmployeesComponent } from 'src/app/components/employees/employees.component';
import { CustomersComponent } from 'src/app/components/customers/customers.component';

const routes: Routes = [
  { 
    path: '',
    component: OperationComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'employee',
    component: EmployeesComponent,
  },
  {
    path: 'custom',
    component: CustomersComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OperationModule { }
