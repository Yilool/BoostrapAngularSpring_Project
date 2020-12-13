import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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

  async onPost() {
    this.product.prdName = this.productFormContent.get('nombre').value;
    this.product.prdPrice = +this.productFormContent.get('precio').value;
    let le = this.prdService.postProduct(this.product)
    console.log(le);
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
    this.product = await this.prdService.delProduct(id);
    console.log(this.product)
    this.loading = false;
  }
}
