import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { MapComponent} from './map/map.component';
import { ProductsComponent} from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:RegistrationComponent},
  {path:'registration',component:RegistrationComponent},
  
  {path:'dashboard',component:DashboardComponent,
  children: [
    {path:'products/:id',component:ProductsComponent},
    {path:'map',component:MapComponent}
  ]},
  
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
