import { Component, OnInit , Output , EventEmitter , Input} from '@angular/core';
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
  @Output() toggleSidenav = new EventEmitter();
  @Input() menuAvailable : boolean;
  mode : boolean = false;
  home : MenuItem;
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
