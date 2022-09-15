import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LessonService } from 'src/app/core/services/lesson.service';

@Component({
  selector: 'app-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.css']
})
export class ModalConfirmDeleteComponent implements OnInit {

  @Input() item: any
  @Output() actionLoading = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private lessonService: LessonService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  confirmDelete() {
    this.lessonService.delete(this.item).subscribe(data => {
      switch (data.errCode) {
        case '1':
          this.actionLoading.emit();
          this.toastService.success(data.errDesc);
          this.closeModal();
          break;
        case '-1':
          this.toastService.error(data.errDesc);
          break;
      }
    })
  }
}
