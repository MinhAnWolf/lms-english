import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/core/services/accountService';

@Component({
  selector: 'app-management-modal-user',
  templateUrl: './management-modal-user.component.html',
  styleUrls: ['./management-modal-user.component.css']
})
export class ManagementModalUserComponent implements OnInit {

  @Input() accountModel: any
  @Output() actionLoading = new EventEmitter();

  constructor(private modalService: NgbModal,
    private accountService: AccountService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  confirmDelete() {
    console.log("func confirmDelete");
    console.log(this.accountModel);
    this.accountService.delete(this.accountModel).subscribe(data => {
      switch (data.errCode) {
        case '0':
          this.actionLoading.emit();
            this.toastService.success(data.errDesc);
            this.closeModal();
          break;
        case '1':
          this.toastService.error(data.errDesc);
          break;
      }
    })
  }

}
