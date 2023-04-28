import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrdermasterComponent } from './Components/Order/ordermaster/ordermaster.component';
import { NotFoundComponent } from './Components/Not-Found/Not-Found.component';
import { MainLayoutComponent } from './Components/Main-Layout/Main-Layout.component';
import { UserLoginComponent } from './Components/User-Login/User-Login.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent , children : [
    {path: '', redirectTo: '/Home', pathMatch: 'full'}, // Default Path
    {path: 'Home', component: HomeComponent},
    {path: 'Products', component: ProductListComponent},
    {path: 'Order', component: OrdermasterComponent},
    {path: 'Products/:pid', component: ProductDetailsComponent}
  ]},
  {path: 'Login', component: UserLoginComponent},
  {path: '**', component: NotFoundComponent} // wild card path and it must be in the last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
