import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adList: string[];
  constructor() {
    this.adList = [
      "Big Discounts",
      "Sale up to 50%",
      "Check our friday offers",
      "",
      "Special white friday offers up to 70%"
    ];
  }

  getScheduledAds(intervalInSeconds: number) : Observable <string> {
    return new Observable <string> ((observer) => {
      let counter = 0;
      let adsTimer = setInterval(() => {
        if (counter == this.adList.length) {
          observer.complete();
        }
        if (this.adList[counter] == "") {
          observer.error("Error : Empty Ads");
        }
        observer.next(this.adList[counter]);
        counter++;
      },intervalInSeconds*1000);

      return {
        unsubscribe() {
          // will call in case of :
          // 1- Error
          // 2- Complete
          // 3- unsubscribe
          clearInterval(adsTimer);
          console.log("In Obs unsubscribe");
        }
      }
    })
  }
}
