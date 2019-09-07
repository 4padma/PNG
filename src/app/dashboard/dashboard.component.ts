import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) {
    sessionStorage.setItem('store','DMart');
   }

  ngOnInit() {
    this.router.navigate(['map']);
  }
  // search(){
  //   sessionStorage.setItem('store','KFC');
  //   document.getElementById
  // }
}
