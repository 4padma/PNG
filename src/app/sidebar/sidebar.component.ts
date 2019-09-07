import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  stores;
  constructor(private commonService:CommonService,private route:Router) { }

  ngOnInit() {
    this.stores = [
      {
        name: 'Photos',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Recipes',
        updated: new Date('1/17/16'),
      },
      {
        name: 'Work',
        updated: new Date('1/28/16'),
      }
    ];
  }

  searchStores(){
    this.commonService.setRefreshMap();
    this.route.navigate(['dashboard/map']);
  }
  goToStore(store){
    console.log(store);
    this.route.navigate(['dashboard/products',store.name])
  }
}
