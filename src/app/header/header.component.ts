import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value;
  constructor(private common:CommonService) { }

  ngOnInit() {
    this.common.getAddTOCart().subscribe((res)=>{
      if(res){
      this.value=res;
      }else{
        this.value=0;
      }
    })
  }

}
