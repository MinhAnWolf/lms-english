import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shares/ui/ui.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    UiModule
  ]
})
export class HomeModule { }
