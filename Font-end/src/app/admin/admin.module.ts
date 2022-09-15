import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { ManagementVideoComponent } from './management-video/management-video.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManagementSubjectComponent } from './management-subject/management-subject.component';
import { ManagementBookComponent } from './management-book/management-book.component';
import { ManagementModalUserComponent } from './management-user/management-modal-user/management-modal-user.component';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmDeleteComponent } from './management-video/modal-confirm-delete/modal-confirm-delete.component';
import { ManagementUnitComponent } from './management-unit/management-unit.component';
import { ModalChangePasswordComponent } from './management-user/modal-change-password/modal-change-password.component';
import { MenuComponent } from './menu/menu.component';
import { AppHttpInterceptor } from '../HttpInterceptor';

@NgModule({
  declarations: [
    NavbarComponent,
    AdminComponent,
    ManagementVideoComponent,
    ManagementUserComponent,
    ManagementSubjectComponent,
    ManagementBookComponent,
    ManagementModalUserComponent,
    ModalConfirmDeleteComponent,
    ManagementUnitComponent,
    ModalChangePasswordComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,

    ToastrModule.forRoot(),
    NgbPaginationModule,
    NgbModule,
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ]
})
export class AdminModule { }
