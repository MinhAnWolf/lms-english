import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = [
    { name: 'Tài khoản', urlimage: 'https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Web-myspace-alt-Metro-icon.png', routing: 'admin/management-user' },
    { name: 'Môn học', urlimage: 'https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Apps-Live-Mail-Metro-icon.png', routing: 'admin/management-subject' },
    { name: 'Sách', urlimage: 'https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Web-Chrome-Web-Store-Metro-icon.png', routing: 'admin/management-book' },
    { name: 'Bài học', urlimage: 'https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Folders-OS-My-Apps-Metro-icon.png', routing: 'admin/management-unit' },
    { name: 'Phần học', urlimage: 'https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Folders-OS-Documents-Metro-icon.png', routing: 'admin/management-lesson' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
