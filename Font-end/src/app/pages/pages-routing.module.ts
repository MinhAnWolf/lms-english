import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { UnitComponent } from './unit/unit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookComponent },
  { path: 'book/unit', component: UnitComponent },
  { path: 'book/unit/lesson', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
