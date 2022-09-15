import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/core/services/bookService';
import { SubjectService } from 'src/app/core/services/subjectService';

@Component({
  selector: 'app-management-book',
  templateUrl: './management-book.component.html',
  styleUrls: ['./management-book.component.css']
})
export class ManagementBookComponent implements OnInit {

  form: any = FormGroup;
  BOOKS: Array<any> = [];
  filesPDF: any;
  SUBJECTS: any = []

  get f() {
    return this.form.controls;
  }

  constructor(
    private subjectService: SubjectService,
    private bookService: BookService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getAllBook();
    this.getAllSubject();
  }

  formInit() {
    this.form = new FormGroup({
      bookId: new FormControl(null),
      subjectId: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    })
  }

  getAllSubject() {
    this.subjectService.getAll({}).subscribe(res => {
      this.SUBJECTS = res.data;
    })
  }

  getAllBook() {
    var json = {
      bookId: 0,
      subjectId: 0
    };
    this.bookService.getAll(json).subscribe(res => {
      this.BOOKS = res.data;
    })
  }



  createBook() {
    this.bookService.create(this.form.value).subscribe(res => {
      if (res.errCode == 1) {
        var formData = new FormData();
        formData.append('files', this.filesPDF);
        this.bookService.upload(formData).subscribe(res => {
        });
        this.getAllBook();
        this.reset();
        this.toastService.success(res.errDesc);
      } else {
        this.getAllBook();
        this.reset();
        this.toastService.error(res.errDesc);
      }
    })
  }

  updateBook() {
    this.bookService.update(this.form.value).subscribe(res => {
      if (res.errCode == 1) {
        this.toastService.success(res.errDesc);
        this.getAllBook();
        this.reset();
      } else {
        this.toastService.error(res.errDesc);
        this.getAllBook();
      }
    })
  }

  deleteBook() {
    this.bookService.detete(this.form.value).subscribe(res => {
      if (res.errCode == 1) {
        this.toastService.success(res.errDesc);
        this.getAllBook();
        this.reset();
      } else {
        this.toastService.error(res.errDesc);
        this.getAllBook();
      }
    })
  }

  uploadFiles(event: any): any {
    var file = event.target.files[0];

    var mimeType = file.type;
    if (!mimeType.match(/application\/pdf/)) {
      return;
    }
    return file;
  }

  removeFile() {
    this.filesPDF = null;
    this.f['content'].reset();
  }

  selectOnPDF(event: any) {
    this.filesPDF = this.uploadFiles(event);
    this.f['content'].setValue(this.filesPDF.name);
  }

  reset() {
    this.form.reset();
  }

  edit(item: any) {
    this.form.setValue(item);
  }

}
