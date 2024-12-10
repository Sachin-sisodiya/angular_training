import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/common/layout/layout.component';
import { ShopComponent } from './components/shop/shop.component';
import { WhyComponent } from './components/why/why.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './components/client/client.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '' ,component: MainComponent
      },
      {
        path: 'shop', component: ShopComponent
      },
      {
        path: 'why', component: WhyComponent
      },
      {
        path: 'client', component: ClientComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      ]      
  },
  {
    path: 'login',component: LoginComponent
  },
 
  // {
  //   path: '**', component: MainComponent
  // },
];
  // {
  //   path: '**', component: MainComponent
  // },;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

