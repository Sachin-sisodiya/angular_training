import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDirectivesComponent } from './component-directives/component-directives.component';
import { StructDirComponent } from './struct-dir/struct-dir.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { InitNgapComponent } from './init-ngap/init-ngap.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentDirectivesComponent,
    StructDirComponent,
    SwitchComponent,
    ForComponent,
    ClassComponent,
    StyleComponent,
    InitNgapComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
