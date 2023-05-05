import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscribtion!: Subscription;
  storeInfo : StoreData;
  isImageShown: boolean = true
  constructor(private promoAds: PromotionAdsService) {
    this.storeInfo = new StoreData ('ITI Store', 'https://picsum.photos/350/200', ['Cairo', 'Alex', 'Sharqia'])
  }

  ngOnInit(): void {
    let observer = {
      next: (data : string) => {
        console.log(data);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete : () => {
        console.log("Ads Finished");
      }

    };
    this.subscribtion =  this.promoAds.getScheduledAds(3).subscribe(observer);

    // adsSubscription.unsubscribe();
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }


  toggleImage () {
    this.isImageShown =! this.isImageShown;
  }

}
