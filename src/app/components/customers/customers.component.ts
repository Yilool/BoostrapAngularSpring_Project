import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/interface/custom';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customFormContent: FormGroup;
  customers: Customer[];
  custom: Customer;
  loading: boolean

  constructor(private formBuilder: FormBuilder, private cusService: CustomerService) {
    this.custom = {
      cusName: null,
      cusSurname: null,
    };
    this.loading = true;
  }

  ngOnInit(): void {
    this.customFormContent = this.formBuilder.group({
      id: [''],
      nombre: [''],
      apellido: [''],
    });
  }
  // Custom CRUD caling service method which use endpoint for get and give data

  //Create custom function
  onPost() {
    this.custom.cusName = this.customFormContent.get('nombre').value;
    this.custom.cusSurname = this.customFormContent.get('apellido').value;
    
    this.cusService.postcustom(this.custom).subscribe((response) => {
      alert('!Cliente Creado!');
      console.log(response);
    });
    
    this.loading = false;
    this.customFormContent.reset();
  }
  
  //Get all custom function
  async onGets() {
    this.customers = await this.cusService.getAllcustom();
    this.loading = false;
    this.customFormContent.reset();
  }
  
  //Get custom function by id
  async onGet() {
    let id = this.customFormContent.get('id').value
    this.custom = await this.cusService.getcustom(id);
    this.loading = false;
    this.customFormContent.reset();
  }
  
  //Delete custom function by id
  onDel() {
    let id = this.customFormContent.get('id').value
    let res = confirm(`¿Seguro que desea borrar el cliente con id ${id}?`);

    if (res) {
      this.cusService.delcustom(id).subscribe((response) => {
      alert('!Cliente Borrado!');
      console.log(response);
    });
    } else {
      alert('!Operación cancelada!');
    }
    
    this.loading = false;
    this.customFormContent.reset();
  }
}
