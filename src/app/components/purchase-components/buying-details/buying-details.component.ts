import { Component, OnInit } from '@angular/core';
import { BuyingPurchaseDTO } from 'src/app/interfaces/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'buying-details',
  templateUrl: './buying-details.component.html',
  styleUrls: ['./buying-details.component.scss']
})
export class BuyingDetailsComponent implements OnInit {
  purchaseCount: number;
  totalCost: number;
  purchaseList: BuyingPurchaseDTO[];
  isErrorFree = true;

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails() {
    this.purchaseService.getBuyingDetails().subscribe(
      {
        next: data => {
          this.isErrorFree = true;
          this.purchaseCount = data.purchaseCount;
          this.totalCost = data.totalCost;
          this.purchaseList = data.purchaseList;
        },
        error: err => {
          console.log(err);
          this.isErrorFree = false;
          this.purchaseCount = 0;
          this.totalCost = 0;
          this.purchaseList = null;
        }
      }
    )
  }
}


