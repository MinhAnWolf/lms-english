import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item/card-item.component';
import { RouterModule } from '@angular/router';
import { ModalAnnouncementComponent } from './modal-announcement/modal-announcement.component';

@NgModule({
  declarations: [
    CardItemComponent,
    ModalAnnouncementComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardItemComponent,
    ModalAnnouncementComponent
  ]
})
export class UiModule { }
