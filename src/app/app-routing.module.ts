import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { MapComponent} from './map/map.component';
import { ProductsComponent} from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'products/:id',component:ProductsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'map',component:MapComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
