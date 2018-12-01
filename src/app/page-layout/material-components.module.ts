import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatSidenavModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatRadioModule,
    MatExpansionModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatRadioModule,
    MatExpansionModule
  ]
})
export class MaterialComponentsModule { }
