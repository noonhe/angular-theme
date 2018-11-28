import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomePageComponent } from './home-page/home-page.component';

import {MaterialComponentsModule} from './material-components.module';
import {PrimengComponentsModule} from '../primeng-components.module';
import {CustomPrimengModule} from '../custom-primeng/custom-primeng.module';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, HomePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    PageLayoutRoutingModule,
    MaterialComponentsModule,
    PrimengComponentsModule,
    CustomPrimengModule
  ],
  exports:[
    HeaderComponent,
    SidenavComponent,
    HomePageComponent
  ]
})
export class PageLayoutModule { }
