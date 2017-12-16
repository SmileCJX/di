import { Injectable } from '@angular/core';
import {ProductService, Product} from "./product.service";

@Injectable()
export class AnotherProductService implements ProductService{

  getProduct(): Product {
    return new Product(1,"sunsung8",7000,"最新款三星");
  }

  constructor() { }

}
