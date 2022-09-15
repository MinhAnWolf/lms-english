import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/core/services/accountService';

@Component({
  selector: 'app-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styleUrls: ['./modal-change-password.component.css']
})
export class ModalChangePasswordComponent implements OnInit {

  hideNewPassword = true;
  hideConfirmPassword = true;
  changeForm: any = FormGroup;
  @Input() accountModel: any
  
  constructor(private accountService: AccountService,
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.accountModel.password = '123';
    console.log(this.accountModel)
    this.initForm()
  }

  initForm() {
    this.changeForm = this.formBuilder.group({
      password: ['', Validators.minLength(6)],
      confirm: ['', Validators.minLength(6)]
    })
  }

  get getForm() {
    return this.changeForm.value
  }

  update() {
    if (this.getForm.password == '' || this.getForm.confirm == '') {
      this.toast.warning("Password or Confirm Password is null")
    } else {
      if (this.getForm.password == this.getForm.confirm) {
        this.accountModel.password = this.getForm.password;
        this.accountService.change_password(this.accountModel).subscribe(data => {
          switch (data.errCode) {
            case '0':
              this.toast.success(data.errDesc)
              this.closeModal();
              break;
            case '1':
              this.toast.error(data.errDesc)
              break;
            default:
              break;
          }
        })
      } else {
        this.toast.warning("confirm invalid password")
      }
    }
  }

  clearForm(){
    this.changeForm.reset();
  }

  closeModal(){
      this.modalService.dismissAll();
  }

}
