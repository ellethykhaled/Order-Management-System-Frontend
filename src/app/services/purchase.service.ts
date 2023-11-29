import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyingDetailsResponse, CostSummary, PurchaseOrder, RevenueSummaryResponse as RevenueSummary, SellingDetailsResponse } from '../interfaces/purchase';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseUrl = 'http://localhost:8765';

  constructor(private http: HttpClient) { }
  
  getSellingDetails(): Observable<SellingDetailsResponse> {
         const headers = new HttpHeaders({
           'Content-Type': 'application/json',
           Authorization: `Bearer ${sessionStorage.getItem('token')}`,
         });
    return this.http.get<SellingDetailsResponse>(
      `${this.baseUrl}/selling/get-purchase-details`,
      { headers: headers }
    );
  }
  getSellingSummary(): Observable<RevenueSummary> {
         const headers = new HttpHeaders({
           'Content-Type': 'application/json',
           Authorization: `Bearer ${sessionStorage.getItem('token')}`,
         });
    return this.http.get<RevenueSummary>(
      `${this.baseUrl}/selling/get-revenue-summary`,
      { headers: headers }
    );
  }

  getBuyingDetails(): Observable<BuyingDetailsResponse> {
         const headers = new HttpHeaders({
           'Content-Type': 'application/json',
           Authorization: `Bearer ${sessionStorage.getItem('token')}`,
         });
    return this.http.get<BuyingDetailsResponse>(
      `${this.baseUrl}/buying/get-purchase-details`,
      { headers: headers }
    );
  }
  getBuyingSummary(): Observable<CostSummary> {
         const headers = new HttpHeaders({
           'Content-Type': 'application/json',
           Authorization: `Bearer ${sessionStorage.getItem('token')}`,
         });
    return this.http.get<CostSummary>(
      `${this.baseUrl}/buying/get-cost-summary`,
      { headers: headers }
    );
  }

  submitBuyingOrder(productDetails: PurchaseOrder) {
         const headers = new HttpHeaders({
           'Content-Type': 'application/json',
           Authorization: `Bearer ${sessionStorage.getItem('token')}`,
         });
    const url = `${this.baseUrl}/buying/submit-order`;
    return this.http.post(url, productDetails, { headers: headers });
  }
}
