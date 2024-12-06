import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { TestimonialPageComponent } from './pages/testimonial-page/testimonial-page.component';
import { WhyPageComponent } from './pages/why-page/why-page.component';
const routes: Routes = [{
   path: '', component: MainPageComponent},

    {
      path:'contact', component: ContactPageComponent
    },
    { path: 'shop', component: ShopPageComponent },
    { path: 'testimonials', component: TestimonialPageComponent },
    { path: 'why', component: WhyPageComponent }


   
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

