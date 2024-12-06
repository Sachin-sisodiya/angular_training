import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ShopComponent } from './components/shop/shop.component';
import { SavinhComponent } from './components/savinh/savinh.component';
import { SavingComponent } from './components/saving/saving.component';
import { WhyComponent } from './components/why/why.component';
import { GiftComponent } from './components/gift/gift.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TestimonialPageComponent } from './pages/testimonial-page/testimonial-page.component';
import { WhyPageComponent } from './pages/why-page/why-page.component';
import { ClientComponent } from './components/client/client.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ShopComponent,
    SavinhComponent,
    SavingComponent,
    WhyComponent,
    GiftComponent,
    ContactComponent,
    InfoComponent,
    FooterComponent,
    MainPageComponent,
    ContactPageComponent,
    TestimonialPageComponent,
    WhyPageComponent,
    ClientComponent,
    ShopPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
