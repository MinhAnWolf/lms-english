import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';
import { UnitModule } from './unit/unit.module';
import { BookComponent } from './book/book.component';
import { BookModule } from './book/book.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    DetailModule,
    UnitModule,
    BookModule,
  ]
})
export class PagesModule { }
