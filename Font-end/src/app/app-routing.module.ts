import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren:() => import('./pages/pages.module').then(m =>m.PagesModule)},
  { path: 'auth', loadChildren:() => import('./auth/auth.module').then(m =>m.AuthModule)},
  { path: 'admin',component:AdminComponent, loadChildren:() => import('./admin/admin.module').then(m =>m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
