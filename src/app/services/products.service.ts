import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'http://localhost:8765';
  private token: any;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  });

  constructor(private http: HttpClient) {}
  // add new product
  addProduct(productDetails: Product): Observable<any> {
    return this.http.post('http://localhost:8765/products', productDetails, {headers: this.headers} );
  }
  getProductById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?id=${id}`);
  }
  // get all products
  getAllProducts(): Observable<any> {
    //const url = `${this.baseUrl}/products`;
    return this.http.get('http://localhost:8765/products',{headers: this.headers});
  }
  // Edit a product
  editProduct(id: string, productDetails: Product): Observable<Product> {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.put<Product>(url, productDetails, {
      headers: this.headers,
    });
  }

  // Delete a product
  deleteProduct(id: any): Observable<void> {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.delete<void>(url, { headers: this.headers });
  }
}
