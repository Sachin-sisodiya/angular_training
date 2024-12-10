import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ShopComponent } from './components/shop/shop.component';
import { SavingComponent } from './components/saving/saving.component';
import { WhyComponent } from './components/why/why.component';
import { GiftComponent } from './components/gift/gift.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoComponent } from './components/common/info/info.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { ClientComponent } from './components/client/client.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ShopComponent,
    SavingComponent,
    WhyComponent,
    GiftComponent,
    ContactComponent,
    InfoComponent,
    FooterComponent,
    LayoutComponent,
    MainComponent,
    ClientComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
