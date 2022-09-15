import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/accountService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed = true;
  token: any;
  role: any;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.islogin();
  }

  islogin() {
    this.token = sessionStorage.getItem("Token");
    this.role = sessionStorage.getItem("Role");
  }

  logout() {

      sessionStorage.removeItem("Token");
      localStorage.removeItem("Token");
      this.router.navigate(['/auth/login']);
      return;

  }

}
