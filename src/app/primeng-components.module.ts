import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {PanelMenuModule} from 'primeng/panelmenu'
import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BreadcrumbModule,
    PanelMenuModule,
  ],
  exports:[
    BreadcrumbModule,
    PanelMenuModule,
  ]
})
export class PrimengComponentsModule { }
