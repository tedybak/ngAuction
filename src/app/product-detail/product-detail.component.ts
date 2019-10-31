import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  productId1 = 1234;
  productId2 = 1235;
  productId3 = 1236;
  sellerId = 5678;
}
