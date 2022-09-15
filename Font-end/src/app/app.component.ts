import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from './core/services/accountService';
import { ModalAnnouncementComponent } from './shares/ui/modal-announcement/modal-announcement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    config: NgbModalConfig,
    private router: Router,
    private modalService: NgbModal,
    private accountService: AccountService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    var token = sessionStorage.getItem("Token");
    if (!token){
      this.router.navigate(['/auth/login']);
      return
    }

    // this.accountService.isLogin(token).subscribe(res => {
    //   console.log(res);
    //   if (res){
    //     sessionStorage.setItem("Token", res.data);
    //   }
    // }, err => {
    //   this.modalService.open(ModalAnnouncementComponent)
    //   this.router.navigate(['/auth/login']);
    //   return;
    // })
  }

}
