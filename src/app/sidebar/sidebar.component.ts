import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';
import { StoreDetails } from '../shared/models/storeDetails.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  stores: StoreDetails[];
  constructor(private commonService: CommonService, private route: Router) { }

  ngOnInit() {
    this.stores = [
      {
        storeId: "KFC",

        storeName: "KFC",

        description: "Restorent",

        locationId: "string",

        storeTypeId: "string"
      },
      {
        storeId: "DMart",

        storeName: "DMart",

        description: "Store",

        locationId: "string",

        storeTypeId: "string"
      },
      {
        storeId: "SPAR",

        storeName: "SPAR",

        description: "Store",

        locationId: "string",

        storeTypeId: "string"
      },
      {
        storeId: "Apollo",

        storeName: "Apollo",

        description: "Pharmacy",

        locationId: "string",

        storeTypeId: "string"
      }

    ];
  }

  searchStores() {
    this.commonService.setRefreshMap();
    this.route.navigate(['dashboard/map']);
  }
  goToStore(store) {
    console.log(store);
    this.commonService.setGotoCart(false);
    this.route.navigate(['dashboard/products', store.storeName])
  }
}
