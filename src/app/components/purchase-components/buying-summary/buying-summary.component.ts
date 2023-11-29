import { Component, OnInit } from '@angular/core';
import { CostDTO } from 'src/app/interfaces/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'buying-summary',
  templateUrl: './buying-summary.component.html',
  styleUrls: ['./buying-summary.component.scss']
})
export class BuyingSummaryComponent implements OnInit {
  productsPurchased: number;
  totalCost: number;
  costs: CostDTO[];
  isErrorFree = true;

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.loadSummary();
  }

  loadSummary() {
    this.purchaseService.getBuyingSummary().subscribe({
      next: data => {
        this.isErrorFree = true;
        this.productsPurchased = data.productsPurchasedCount;
        this.totalCost = data.totalCost;
        this.costs = data.productsCosts;
      },
      error: err => {
        console.log(err);
        this.isErrorFree = false;
      }
    })
  }
}


