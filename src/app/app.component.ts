import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CommonService } from './shared/common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PNG';
  constructor(private router:Router,private common:CommonService){
    this.common.url=window.location.href;
  }
}
