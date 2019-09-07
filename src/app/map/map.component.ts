import { Component, OnInit } from '@angular/core';
import { SafePipe } from '../shared/safePipe.pipe';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  url="assets/maps.html";
  constructor(private common:CommonService) { }

  ngOnInit() {
    this.common.getRefreshMap().subscribe((res)=>{
      this.search();
    })
  }

  search(){
    sessionStorage.setItem('store','KFC')
    let test = document.getElementById('iframeId').setAttribute('src','assets/maps.html');
  }

}
