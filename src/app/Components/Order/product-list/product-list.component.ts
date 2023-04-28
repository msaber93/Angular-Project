import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import 'bootstrap';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges, OnInit {
  // prdList: IProduct[];
  prdListOfCat: IProduct[] = [];
  @Input() sentCatID: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;
  orderTotalPrice: number = 0;
  orderDate: Date;
  constructor(private staticPrdServices: StaticProductsService , private router: Router) {
    this.totalPriceChanged = new EventEmitter<number>();
    // this.prdList = [
    //   {id: 100, name: 'Lenovo IdeaPad', price: 600, quantity: 2, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 1 },
    //   {id: 110, name: 'HP Laptop', price: 500, quantity: 0, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 1 },
    //   {id: 120, name: 'Toshiba', price: 670, quantity: 10, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 2 },
    //   {id: 130, name: 'Mac Pro', price: 800, quantity: 2, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 2 },
    //   {id: 140, name: 'Realme 2Pro', price: 755.58, quantity: 1, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 3 },
    //   {id: 150, name: 'IPhone 14MaxPro', price: 900, quantity: 0, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 3 },
    // ]
    this.orderDate = new Date;
    // this.prdListOfCat = this.prdList;
  }
  ngOnInit(): void {
    this.prdListOfCat = this.staticPrdServices.getAllProducts();
  }
  ngOnChanges(): void {
    // this.filterProductByCatID();
    this.prdListOfCat = this.staticPrdServices.getProductsByCatID(this.sentCatID);
  }

  buy(productPrice: number, count: string ) {
      // this.orderTotalPrice = parseInt(count)* productPrice;
      // this.orderTotalPrice = Number (count)* productPrice;
      this.orderTotalPrice += +count * productPrice;
      this.totalPriceChanged.emit(this.orderTotalPrice);
  }
  openPrdDetails(prID: number) {
      // this.router.navigateByUrl('/Products/' + prID);
      // this.router.navigate(['/Products', prID]);
  }
  // changeCtg() {
  //   this.selectedCatID = 1;
  // }

  // private filterProductByCatID() {
  //   if (this.sentCatID == 0) {
  //     this.prdListOfCat = this.prdList
  //   } else {
  //     this.prdListOfCat = this.prdList.filter( prd =>  prd.categoryID == this.sentCatID)
  //   }

  // }
}
