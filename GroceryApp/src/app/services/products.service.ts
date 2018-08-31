import { Injectable } from '@angular/core';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { PRODUCTS } from '../context.memory';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProducts(): Observable<any[]> {
    return Observable.of(PRODUCTS).delay(100);
  }
  getColumns(): string[] {
    return ['', '', '', ''];
    }
  }

