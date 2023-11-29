import { Component, OnInit } from '@angular/core';
import { SellingPurchaseDTO } from 'src/app/interfaces/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'selling-details',
  templateUrl: './selling-details.component.html',
  styleUrls: ['./selling-details.component.scss']
})
export class SellingDetailsComponent implements OnInit {
  purchaseCount: number;
  totalRevenue: number;
  purchaseList: SellingPurchaseDTO[];
  isErrorFree = true;

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails() {
    this.purchaseService.getSellingDetails().subscribe(
      {
        next: data => {
          this.isErrorFree = true;
          this.purchaseCount = data.purchaseCount;
          this.totalRevenue = data.totalRevenue;
          this.purchaseList = data.purchaseList;
        },
        error: err => {
          console.log(err);
          this.isErrorFree = false;
        }
      })
  }
}


