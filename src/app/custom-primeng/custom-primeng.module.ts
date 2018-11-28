import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { CustomPrimengRoutingModule } from './custom-primeng-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import {PrimengComponentsModule} from '../primeng-components.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    CustomPrimengRoutingModule,
    PrimengComponentsModule,
    FormsModule,
    BrowserModule,
    FlexLayoutModule
  ],
  exports:[
    BreadcrumbComponent
  ]
})
export class CustomPrimengModule { }
