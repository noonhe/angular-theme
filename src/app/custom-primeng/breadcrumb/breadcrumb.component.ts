import { Component, OnInit } from '@angular/core';
import {Breadcrumb} from 'primeng/components/breadcrumb/breadcrumb'
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent extends Breadcrumb implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
