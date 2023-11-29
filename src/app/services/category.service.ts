import { Observable } from 'rxjs';
import { Category } from './../interfaces/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  });

  addCategory(category: Category): Observable<any> {
    return this._HttpClient.post('http://localhost:8765/categories', category, {headers: this.headers});
  }

  getAllCategories(): Observable<any> {
    return this._HttpClient.get('http://localhost:8765/categories', {
      headers: this.headers,
    });
  }
  deleteCategory(id: any): Observable<any> {
    return this._HttpClient.delete(`http://localhost:8765/categories/${id}`, {
      headers: this.headers,
    });
  }
}
