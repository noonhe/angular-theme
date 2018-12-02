import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  items: MenuItem[];
  collapsed: boolean = false;
  pushed:boolean = false;
  mode : string;
  ngOnInit() {
    this.items = [{
        label: 'سیستم مدیریت مستندات',
        icon:'storage',
        items: [{label: 'تخصیص شماره فنی', routerLink:'TechnicalNoGenerator'},
        {label: 'لیست کدهای ثبت‌شده', routerLink:'TechnicalNoGenerator'},
        {label: 'لیست پروژه‌های موقت', routerLink:'TechnicalNoGenerator'},]
    },
    {
        label: 'سیستم مدیریت مجوزها',
        icon:'assignment',
        items: [
            {label: 'مجوزها', routerLink:'DomainPermission' },
            {label: 'نقش‌ها', routerLink:'RoleUserPermission'}
        ]
    },];
      
  }

  changeSidenavMode(event){
      console.log(event.checked);
      if(event.checked){
          this.mode="side";
          this.pushed=true;
      }
      else{
          this.mode="over";
          this.pushed=false;
      }
  }

  happened(event){
      console.log('hi');
  }
}
