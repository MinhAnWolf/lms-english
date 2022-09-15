import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/core/services/bookService';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any = [];
  routing = "unit"

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    var ids = this.route.snapshot.queryParamMap.get("ids")
    var json = {
      bookId: -1,
      subjectId: ids
    };
    this.bookService.getAll(json).subscribe(res => {
      this.books = res.data;
    })
  }

}
