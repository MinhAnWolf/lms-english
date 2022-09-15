import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../core/services/accountService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router,
    private acccountService: AccountService
  ) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem("Role");
    var token = sessionStorage.getItem("Token");

    if (!token){
      this.router.navigate(['']);
      return;
    }

    if (role != 'ADMIN'){
      this.router.navigate(['']);
      return;
    }

    // var json = {
    //   token: token
    // }
    // this.acccountService.checkRole(json).subscribe(res => {
    //   if (res){
    //     if (res.data == '0'){
    //       return;
    //     }
    //   }
    //   this.router.navigate(['']);
    //   return;
    // })
  }

}
