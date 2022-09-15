import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/core/services/accountService';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ManagementModalUserComponent } from './management-modal-user/management-modal-user.component';
import { Router } from '@angular/router';
import { ModalChangePasswordComponent } from './modal-change-password/modal-change-password.component';
import { BookService } from 'src/app/core/services/bookService';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.css']
})
export class ManagementUserComponent implements OnInit {

  hide = true;
  formRegister: any = FormGroup
  total: number = 100;
  pageSize: number = 5;
  pageNum: number = 1;
  arrAccount: any
  arrPageSize = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 100]
  accountEdit:any
  searchUser:string = ''
  books: any;

  constructor(
    private accountService: AccountService,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private toastService: ToastrService,
    private modalService : NgbModal,
    private routes : Router
  ) { }

  openVerticallyCentered(item:any) {
    const modalHref =  this.modalService.open(ManagementModalUserComponent, { centered: true });
    modalHref.componentInstance.accountModel = item;
    modalHref.componentInstance.actionLoading.subscribe((childrenCall:any) =>{
            this.fullList();
    })
  }

  ngOnInit(): void {
    this.init();
    this.fullList();
    this.getBooks();
  }

  fullList() {
    let json = {
      page: this.pageNum,
      limit: this.pageSize,
      username: this.searchUser
    }
    this.accountService.getAll(json).subscribe(data => {
        this.total = data.totalRecored;
        this.arrAccount = data.data
    });
  }

  getBooks() {
    var json = {
      bookId: 0,
      subjectId: 0
    }
    this.bookService.getAll(json).subscribe(res => {
      console.log(res);
      if (res){
        this.books = res.data;
      }
    })
  }

  onPageChange(pageNum: number) {
    this.pageNum = pageNum
    this.fullList();
  }

  onPageSizeChange() {
    this.fullList();
  }

  register() {
    let getPassword = this.getRegisterForm.password;
    let getConfirm = this.getRegisterForm.confirm
    // ĐK 1
    if (getPassword == '' && getConfirm == '') {
      this.toastService.error('password is empty !')
    }
    //ĐK 2
    else if (getPassword == getConfirm) {
      // điều kiện lồng nhau (đk 2.1)
      if (this.formRegister.value.levels == '') {
        this.toastService.error('level is empty !')
      }
      // (đk 2.2)
      else if (this.formRegister.value.username == '') {
        this.toastService.error('Student Code is empty !')
      }
      // (đk 2.3)
      else {
        let json = {
          username: this.formRegister.value.username,
          password: this.formRegister.value.password,
          levels: this.formRegister.value.levels
        }
        this.accountService.register(json).subscribe(data => {
          switch (data.errCode) {
            case '-1':
              this.toastService.error(data.errDesc)
              break;
            case '0':
              this.toastService.success(data.errDesc)
              this.fullList();
              break;
            case '1':
              this.toastService.error(data.errDesc)
              break;
          }
        })
      }
      // kết thúc =============== điều kiện lồng nhau
    }
    // ĐK 3
    else {
      this.toastService.error('Incorrect password !')
    }
  }

  init() {
    this.formRegister = this.formBuilder.group({
      username: ['', Validators.minLength(7)],
      password: ['', Validators.minLength(6)],
      confirm: ['', Validators.minLength(6)],
      levels: ['', Validators.required]
    });
  }

  get getRegisterForm() {
    return this.formRegister.value
  }

  edit(item:any){
      this.accountEdit = item;
      this.formRegister = this.formBuilder.group({
        username: [this.accountEdit.username, Validators.minLength(7)],
        password: [this.accountEdit.password, Validators.minLength(6)],
        confirm: [this.accountEdit.password, Validators.minLength(6)],
        levels: [this.accountEdit.levels, Validators.required]
      });
  }

  update(){
    let getPassword = this.getRegisterForm.password;
    let getConfirm = this.getRegisterForm.confirm
    // ĐK 1
    if (getPassword == '' && getConfirm == '') {
      this.toastService.error('password is empty !')
    }
    //ĐK 2
    else if (getPassword == getConfirm) {
      // điều kiện lồng nhau (đk 2.1)
      if (this.formRegister.value.levels == '') {
        this.toastService.error('level is empty !')
      }
      // (đk 2.2)
      else if (this.formRegister.value.username == '') {
        this.toastService.error('Student Code is empty !')
      }
      // (đk 2.3)
      else {
        let json = {
            id : this.accountEdit.id,
            username : this.getRegisterForm.username,
            levels : this.getRegisterForm.levels,
            password : this.getRegisterForm.password
        }
        this.accountService.update(json).subscribe(data => {
          switch (data.errCode) {
            case '-1':
              this.toastService.error(data.errDesc)
              break;
            case '0':
              this.toastService.success(data.errDesc)
              this.fullList();
              this.clear();
              break;
            case '1':
              this.toastService.error(data.errDesc)
              break;
          }
          })
      }
      // kết thúc =============== điều kiện lồng nhau
    }
    // ĐK 3
    else {
      this.toastService.error('Incorrect password !')
    }    
  }

  callModalDelete(item:any){
      this.openVerticallyCentered(item);
  }
  
  clear(){
    this.formRegister.reset();  
  }

  search(param:any){
    this.searchUser = param.target.value;
    this.fullList();
  }

  changePassword(item:any){
    const modalHref =  this.modalService.open(ModalChangePasswordComponent, { centered: true });
    modalHref.componentInstance.accountModel = item;
  }

}
