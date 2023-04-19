import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-ordermaster',
  templateUrl: './ordermaster.component.html',
  styleUrls: ['./ordermaster.component.scss']
})
export class OrdermasterComponent {
  prdCat: ICategory[];
  selectedCatID: number = 0;
  orderTotalPricee: number = 0;
  constructor() {
    this.prdCat = [
      {id: 1, name: 'Laptops'},
      {id: 2, name: 'Tablets'},
      {id: 3, name: 'Mobiles'},
    ];
  }
}
