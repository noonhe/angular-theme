import { Component, OnInit , Output , EventEmitter , Input} from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MatMenuModule} from '@angular/material'
import { ObjectUnsubscribedError } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {

  constructor( ) { }
  private items : MenuItem[]
  @Output() toggleSidenav = new EventEmitter();
  @Input() menuAvailable : boolean;
  mode : boolean = false;
  home : MenuItem;

  profileOptions:object[] = [
    {id:1 , title:'پروفایل' , icon:'account_circle'},
    {id:2 , title:'تنظیمات' , icon:'settings'},
    {id:3 , title:'خروج' , icon:'exit_to_app'},
  ];
  notifications: object[] =[
    {id:1 ,title:'قرار ملاقات', icon:'check_circle'},
    {id:2 ,title:'جلسه', icon:'check_circle'},
    {id:3 ,title:'وظایف انجام نشده', icon:'check_circle'},
    {id:4 ,title:'تایم شیت', icon:'check_circle'},
  ];
  messages : object[]=[
    {id:1 , title:'با من تماس بگیر'},
    {id:2 , title:'با من تماس بگیر'},
    {id:3 , title:'با من تماس بگیر'},
    {id:4 , title:'با من تماس بگیر'},
    {id:5 , title:'با من تماس بگیر'},
  ];
  settings : object[]=[
    {id:1 , title:'تغییر تم' , icon:'palette'},
    {id:2 , title:'علاقمندی‌ها' , icon:'star'},
    {id:3 , title:'پس زمینه' , icon:'lock'},
    {id:4 , title:'قفل صفحه' , icon:'wallpaper'},
  ];

  links:object[]=[
    {title:'اعلان‌ها' , icon:'notifications', menu:this.notifications},
    {title:'پیام‌ها' , icon:'comment', menu:this.messages},
    {title:'تنظیمات' , icon:'settings',menu:this.settings},
  ]
  ngOnInit() {
    this.items = [
      {label:'خانه'},
    ];
    this.home = {icon : "pi pi-home"}
  
  }

  changeSidenavMode(mode: boolean){
    console.log(mode);
    this.toggleSidenav.emit();
    this.mode = mode;
  }

}
