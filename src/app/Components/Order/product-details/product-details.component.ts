import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  reciviedPrdID: number = 0;
  prd : IProduct | null = null;
  constructor(private activtedRoute: ActivatedRoute
      , private prdService: StaticProductsService, private location: Location) {

  }


  ngOnInit(): void {
    this.reciviedPrdID = Number(this.activtedRoute.snapshot.paramMap.get('pid'));
    this.prd = this.prdService.getProductByID(this.reciviedPrdID);
  }

  goBack() {
    this.location.back();
  }
}
