import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/core/services/bookService';
import { UnitService } from 'src/app/core/services/unitService';

@Component({
  selector: 'app-management-unit',
  templateUrl: './management-unit.component.html',
  styleUrls: ['./management-unit.component.css']
})
export class ManagementUnitComponent implements OnInit {

  FormUnit: any = FormGroup;
  units: any;
  books: any;

  constructor(
    private unitService: UnitService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllUnit();
    this.getBooks();
  }

  initForm() {
    this.FormUnit = new FormGroup({
      unitId: new FormControl(null),
      name: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      bookId: new FormControl(null, Validators.required)
    })
  }

  getAllUnit() {
    var json = {
      bookId: 0
    }
    this.unitService.getAll(json).subscribe(res => {
      this.units = res.data;
    })
  }

  getBooks() {
    var json = { 
      bookId: 0,
      subjectId: 0
    }
    this.bookService.getAll(json).subscribe(res => {
      this.books = res.data;
    })
  }

  onSubmit() {
    if (this.FormUnit.invalid) {
      return;
    }
    this.unitService.create(this.FormUnit.value).subscribe(res => {
      alert(res.errDesc)
      this.getAllUnit();
      this.FormUnit.reset();
    })
  }

  edit(index: any) {
    this.FormUnit.setValue(index);
  }

  update() {
    if (this.FormUnit.invalid) {
      return;
    }
    this.unitService.update(this.FormUnit.value).subscribe(res => {
      alert(res.errDesc)
      this.getAllUnit();
    })
  }

  clear() {
    this.FormUnit.reset();
  }

  remove(index: any) {
    this.unitService.delete(index).subscribe(res => {
      alert(res.errDesc)
      this.getAllUnit();
    })
  }

}
