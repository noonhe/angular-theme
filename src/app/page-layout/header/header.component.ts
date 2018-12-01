import { Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MatMenuModule} from '@angular/material'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {

  constructor( ) { }
  private items : MenuItem[]
  home : MenuItem;
  ngOnInit() {
    this.items = [
      {label:'خانه'},
    ];
    this.home = {icon : "pi pi-home"}
  
  }

}
