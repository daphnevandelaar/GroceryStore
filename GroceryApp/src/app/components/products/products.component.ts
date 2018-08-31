import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

input_product: string;
products = ['kaas', 'prei', 'loempia', 'wcpapier', 'bananen', 'nootjes'];
// products = [];


onClick_addProduct() {
    this.input_product = (<HTMLInputElement>document.getElementById('input_product')).value;
    this.products.push(this.input_product);
  }
  // var app = angular.module('myApp', []);
  // app.directive('removeMe', function($rootScope) {
  //       return {
  //             link: function(scope, element, attrs) {
  //                 element.bind('click', function() {
  //                     element.remove();
  //                 });
  //             }
  //       };
  // });
onClick_removeProduct(prod: string) {
  const el = document.getElementById(prod);
  el.remove();
}
onClick_buyProduct(prod: string) {
  // hier komt het product wat in de order lijst moet.
}
  constructor() { }

  ngOnInit() {
  }

}
