import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomPrimengModule} from './custom-primeng/custom-primeng.module';
import {PageLayoutModule} from './page-layout/page-layout.module';
import {PrimengComponentsModule} from './primeng-components.module'
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomPrimengModule,
    PageLayoutModule,
    PrimengComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
