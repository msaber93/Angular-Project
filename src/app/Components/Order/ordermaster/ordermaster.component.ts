import { AfterViewInit, Component, ElementRef, EventEmitter, ViewChild} from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-ordermaster',
  templateUrl: './ordermaster.component.html',
  styleUrls: ['./ordermaster.component.scss']
})
export class OrdermasterComponent implements AfterViewInit {
  prdCat: ICategory[];
  selectedCatID: number = 0;
  receivedorderTotalPrice: number = 0;

  // clientNameInpElement : ElementRef = {} as ElementRef;
  // clientNameInpElement : ElementRef | undefined = undefined;
  // clientNameInpElement : ElementRef | null = null;
  // clientNameInpElement ?: ElementRef; // optional
  @ViewChild('clientNameInp ') clientNameInpElement !: ElementRef; // non-null asseration operator
  constructor() {
    this.prdCat = [
      {id: 1, name: 'Laptops'},
      {id: 2, name: 'Tablets'},
      {id: 3, name: 'Mobiles'},
    ];
  }
  ngAfterViewInit(): void {
    this.clientNameInpElement.nativeElement.value = "Put your name Here";
    this.clientNameInpElement.nativeElement.style.outline = "2px solid green";
  }

  onTotalPriceChanged(totalPrice: number) {
      this.receivedorderTotalPrice = totalPrice;
  }
}
