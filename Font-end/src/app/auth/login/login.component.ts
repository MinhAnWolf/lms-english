import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/core/services/accountService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;
  isSubmit = false;
  loading = false;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.formLogin = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  get f () {
    return this.formLogin.controls;
  }

  submit() {
    this.isSubmit = true;
    if (this.formLogin.invalid){
      return;
    }

    this.loading = true;
    this.accountService.login(this.formLogin.value).subscribe(res => {
      this.loading = false;
      if (!res){
        this.toast.error("Tài khoản hoặc mật khẩu không chính xác!");
        return
      }

      if (res.errCode == "1"){
        this.toast.error(res.errDesc);
        return
      }

      sessionStorage.setItem("Token", res.data);
      sessionStorage.setItem("Role", res.role);
      this.router.navigate(['']);
      return;
    }, err => {
      console.log("lỗi")
      console.log(err)
      this.loading = false;
      this.toast.error("Không kết nối được với máy chủ! Vui lòng thử lại...");
      return;
    });
  }
}
