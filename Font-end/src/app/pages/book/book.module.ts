import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/shares/ui/ui.module';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiModule
  ]
})
export class BookModule { }
