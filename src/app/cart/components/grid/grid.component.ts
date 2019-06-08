import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  products = [
  ]
  orders = [

  ]
  constructor() { }

  ngOnInit() {
    [0, 1, 2, 3, 4].forEach((item, index) => {
      this.products.push(
        {
          _id: index,
          name: "Lorem ipsum",
          desc: "dolor sit amet consectetur adipisicing elit",
          price: Math.floor(Math.random() * 100)
        })
    })
    console.log(this.products);
  }
  addToCart(item) {
    this.orders.push(item);
  }
  totalPrice() {
    return this.orders.reduce((x, item) => {
      return x + item.price;
    }, 0)
  }
  remove(index) {
    this.orders.splice(index, 1);
  }
}
