import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,
        MatInputModule,
        MatAutocompleteModule,
      MatSelectModule,
      MatTooltipModule,
    MatToolbarModule,
  MatCheckboxModule,
MatFormFieldModule,
MatSliderModule,
MatSlideToggleModule,
MatSidenavModule,
MatDividerModule,
MatExpansionModule,
MatListModule,
MatGridListModule,
MatTabsModule,
MatTreeModule,
MatButtonModule,
MatButtonToggleModule,
MatBadgeModule,
MatChipsModule,
MatIconModule,
MatProgressSpinnerModule,
MatDialogModule,
MatSnackBarModule,
MatTableModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SafePipe } from './shared/safePipe.pipe';
import  {HttpService } from './shared/http.service';
import { CommonService } from './shared/common.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    MapComponent,
    HeaderComponent,
    SidebarComponent,
    ProductsComponent,
    CartComponent,
    DashboardComponent,
    SafePipe
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
        MatInputModule,
        MatAutocompleteModule,
      MatSelectModule,
      MatTooltipModule,
    MatToolbarModule,
  MatCheckboxModule,
MatFormFieldModule,
MatSliderModule,
MatSlideToggleModule,
MatSidenavModule,
MatDividerModule,
MatExpansionModule,
MatListModule,
MatGridListModule,
MatTabsModule,
MatTreeModule,
MatButtonModule,
MatButtonToggleModule,
MatBadgeModule,
MatChipsModule,
MatIconModule,
MatProgressSpinnerModule,
MatDialogModule,
MatSnackBarModule,
MatTableModule,
BrowserAnimationsModule,
MatToolbarModule
  ],
  providers: [HttpService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
