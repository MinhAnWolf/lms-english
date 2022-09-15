import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementBookComponent } from './management-book/management-book.component';
import { ManagementSubjectComponent } from './management-subject/management-subject.component';
import { ManagementUnitComponent } from './management-unit/management-unit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ManagementVideoComponent } from './management-video/management-video.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'management-lesson', component: ManagementVideoComponent },
  { path: 'management-user', component: ManagementUserComponent },
  { path: 'management-subject', component: ManagementSubjectComponent },
  { path: 'management-book', component: ManagementBookComponent },
  { path: 'management-unit', component: ManagementUnitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
