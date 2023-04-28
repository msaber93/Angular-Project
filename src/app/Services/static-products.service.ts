import { IProduct } from 'src/app/Models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  private prdList: IProduct[];
  constructor() {
    this.prdList = [
      {
        id: 100,
        name: 'Lenovo IdeaPad',
        price: 600,
        quantity: 2,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 1,
      },
      {
        id: 110,
        name: 'HP Laptop',
        price: 500,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 1,
      },
      {
        id: 120,
        name: 'Toshiba',
        price: 670,
        quantity: 10,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 2,
      },
      {
        id: 130,
        name: 'Mac Pro',
        price: 800,
        quantity: 2,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 2,
      },
      {
        id: 140,
        name: 'Realme 2Pro',
        price: 755.58,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 3,
      },
      {
        id: 150,
        name: 'IPhone 14MaxPro',
        price: 900,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 3,
      },
    ];
  }
  getAllProducts(): IProduct[] {
    return this.prdList;
  }

  getProductsByCatID(cID: number): IProduct[] {
    if (cID == 0) {
      return this.prdList;
    } else {
      return this.prdList.filter( (prd) => prd.categoryID == cID );
    }
  }

  getProductByID(pID: number): IProduct | null
  {
    let foundProduct = this.prdList.find(prd => prd.id == pID);
    return foundProduct ? foundProduct : null;
  }
}
