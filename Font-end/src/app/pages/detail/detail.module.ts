import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,

    MatButtonToggleModule,
    MatExpansionModule
  ]
})
export class DetailModule { }
