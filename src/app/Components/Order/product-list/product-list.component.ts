import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  prdCat: ICategory[] = [
    {id: 1, name: 'Laptops'},
    {id: 2, name: 'Tablets'},
    {id: 3, name: 'Mobiles'},
  ];
  prdList: IProduct[];
  selectedCatID: number = 0;
  orderTotalPrice: number = 0;
  constructor() {
    this.prdList = [
      {id: 100, name: 'Lenovo IdeaPad', price: 6000, quantity: 2, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 1 },
      {id: 110, name: 'HP Laptop', price: 5000, quantity: 0, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 1 },
      {id: 120, name: 'Toshiba', price: 6000, quantity: 10, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 2 },
      {id: 130, name: 'Mac Pro', price: 8000, quantity: 2, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 2 },
      {id: 140, name: 'Realme 2Pro', price: 7000, quantity: 0, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 3 },
      {id: 150, name: 'IPhone 14MaxPro', price: 9000, quantity: 0, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 3 },
    ]
  }
  buy(productPrice: number, count: string ) {
      // this.orderTotalPrice = parseInt(count)* productPrice;
      // this.orderTotalPrice = Number (count)* productPrice;
      this.orderTotalPrice = +count * productPrice;
  }
  changeCtg() {
    this.selectedCatID = 1;
  }

}
