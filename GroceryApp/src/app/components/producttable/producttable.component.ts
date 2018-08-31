import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})

export class ProducttableComponent implements OnInit {
  characters: Observable<any[]>;
  columns: string[];
  constructor(private atService: ProductsService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    // ["name", "age", "species", "occupation"]
    this.characters = this.atService.getProducts();
    // all data in mock-data.ts
  }

}
