import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  productFormContent: FormGroup;
  products: Product[];
  product: Product;
  loading: boolean

  constructor(private formBuilder: FormBuilder, private prdService: ProductService) {
    this.product = {
      prdName: null,
      prdPrice: null,
    };
    this.loading = true;
  }

  ngOnInit(): void {
    this.productFormContent = this.formBuilder.group({
      id: [''],
      nombre: [''],
      precio: [''],
    });
  }

  onPost() {
    this.product.prdName = this.productFormContent.get('nombre').value;
    this.product.prdPrice = +this.productFormContent.get('precio').value;
    
    console.log(this.product);
    
    this.prdService.postProduct(this.product).subscribe((response) => {
      alert('Producto creado!');
      console.log(response);

      this.productFormContent.reset();
    });
    
    this.loading = false;
  }
  

  async onGets() {
    this.products = await this.prdService.getAllProduct()
    console.log(this.products)
    this.loading = false;
  }

  async onGet() {
    let id = this.productFormContent.get('id').value
    this.product = await this.prdService.getProduct(id);
    console.log(this.product)
    this.loading = false;
  }

  async onDel() {
    let id = this.productFormContent.get('id').value
    alert(`¿Seguro que desea borrar el producto con id ${id}?`);
    this.product = await this.prdService.delProduct(id);
    alert('!Producto Borrado!');
    console.log(this.product)
    this.loading = false;
  }
}
