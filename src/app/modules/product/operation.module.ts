import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { OperationComponent } from 'src/app/components/operation/operation.component';
import { EmployeesComponent } from 'src/app/components/employees/employees.component';
import { CustomersComponent } from 'src/app/components/customers/customers.component';

const routes: Routes = [
  { 
    // route http://localhost:4200/operation for OperationComponents
    path: '',
    component: OperationComponent,
  },
  {
    // route http://localhost:4200/operation/product for ProductsComponent
    path: 'product',
    component: ProductsComponent,
  },
  {
    // route http://localhost:4200/operation/employee for EmployeesComponent
    path: 'employee',
    component: EmployeesComponent,
  },
  {
    // route http://localhost:4200/operation/custom for CustomersComponent
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
