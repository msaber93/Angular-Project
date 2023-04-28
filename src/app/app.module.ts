import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGPPipe } from './pipes/usdto-egp.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdermasterComponent } from './Components/Order/ordermaster/ordermaster.component';
import { MainLayoutComponent } from './Components/Main-Layout/Main-Layout.component';
import { NotFoundComponent } from './Components/Not-Found/Not-Found.component';
import { UserLoginComponent } from './Components/User-Login/User-Login.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrdermasterComponent,
    MainLayoutComponent,
    NotFoundComponent,
    UserLoginComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
