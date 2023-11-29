import { Component, OnInit } from '@angular/core';
import { RevenueDTO } from 'src/app/interfaces/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'selling-summary',
  templateUrl: './selling-summary.component.html',
  styleUrls: ['./selling-summary.component.scss']
})
export class SellingSummaryComponent implements OnInit {
  productsPurchased: number;
  totalRevenue: number;
  revenues: RevenueDTO[];
  isErrorFree = true;

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.loadSummary();
  }

  loadSummary() {
    this.purchaseService.getSellingSummary().subscribe({
      next: data => {
        this.isErrorFree = true;
        this.productsPurchased = data.productsPurchasedCount;
        this.totalRevenue = data.totalRevenue;
        this.revenues = data.productsRevenues;
      },
      error: err => {
        console.log(err);
        this.isErrorFree = false;
      }
    })
  }
}


