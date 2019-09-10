import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { Item } from '../shared/models/item.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items: Item[];
  selectedItems = [];
  cartItems = [];
  count;
  enableCart
  constructor(private route: ActivatedRoute, private common: CommonService) {
    this.route.params.subscribe(params => console.log(params));
    if (this.selectedItems) {
      this.count = this.selectedItems.length;
    } else {
      this.count = 0;
    }
    this.items = [
      {
        itemName: 'Milk',
        price: '372',
        count: 0
      },
      {
        itemName: 'Curd',
        price: '748',
        count: 0
      },
      {
        itemName: 'bottle',
        price: '7438',
        count: 0
      },
      {
        itemName: 'rice',
        price: '122',
        count: 0
      },

    ]
  }

  ngOnInit() {
    this.common.getGotoCart().subscribe(res => {
      this.enableCart = res
      this.items.forEach(res => {
        if (res.count != 0) {
          this.cartItems.push(res);
        }
      })
    });
  }
  addItemToCart(item) {
    this.selectedItems.push(item);
    for (let i = 0; i < this.items.length; i++) {
      if (item.itemName == this.items[i].itemName) {
        this.items[i].count = this.items[i].count + 1;
      }
    }
    this.count = this.selectedItems.length;
    this.common.setAddToCart(this.count);
  }
  removeItemFromCart(item) {
    for (let i = 0; i < this.selectedItems.length; i++) {
      if (item.itemName == this.selectedItems[i].itemName) {
        this.selectedItems.splice(i, 1);
      }
    }
    for (let i = 0; i < this.items.length; i++) {
      if (item.itemName == this.items[i].itemName) {
        this.items[i].count = this.items[i].count - 1;
      }
    }
    this.count = this.selectedItems.length;
    this.common.setAddToCart(this.count);
  }

}
