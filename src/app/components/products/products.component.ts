import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  product: Product;
  loading: boolean
  
  constructor( private prdService: ProductService ) {
    this.product = {
      prdName: null,
      prdPrice: null,
    };
    this.loading = true;
  }

  ngOnInit(): void {
  }

  async onPost() {
    this.product.prdPrice.valueOf();
    //await this.prdService.postProduct(this.product)
    console.log(this.product);
  }

  async onGets() {
    this.products = await this.prdService.getAllProduct()
    console.log(this.products)
    this.loading = false;
  }

  async onGet(id: number) {
    this.product = await this.prdService.getProduct(id);
    console.log(this.product)
  }

  async onDel(id: number) {
    this.product = await this.prdService.delProduct(id);
    console.log(this.product)
  }
}
