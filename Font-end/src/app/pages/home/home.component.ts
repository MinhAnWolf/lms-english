import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/core/services/subjectService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    {
      image : "https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png", 
      title: "ATN trên Facebook",
      content: "Học Tiếng Anh với Giáo Viên Nước Ngoài | Anh Ngữ ATN English Center.",
      contentBtn: "Truy cập nhóm"
    },
    {
      image : "https://images.unsplash.com/photo-1652904272897-17a86e191902?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      title: "Khai giảng khoá học hè",
      content: "Giảm 50% tặng tiền mặt lên đến 5 triệu đồng.",
      contentBtn: "Đăng ký khoá học"
    },
    {
      image : "https://images.unsplash.com/photo-1622789095704-88b1fb412893?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      title: "Khai giảng khoá học hè",
      content: "Giảm 50% tặng tiền mặt lên đến 5 triệu đồng.",
      contentBtn: "Đăng ký khoá học"
    },
  ]

  subjects: any = [];
  routing = "book"

  constructor(
    private subjectService: SubjectService,
  ) { }

  ngOnInit(): void {
    this.subjectService.getAll({}).subscribe(res => {
      console.log(res);
      this.subjects = res.data;
    });

  }
  
  
}
