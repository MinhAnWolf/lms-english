import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './unit.component';
import { UiModule } from 'src/app/shares/ui/ui.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UnitComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule
  ]
})
export class UnitModule { }
