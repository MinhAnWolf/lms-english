import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubjectService } from 'src/app/core/services/subjectService';

@Component({
  selector: 'app-management-subject',
  templateUrl: './management-subject.component.html',
  styleUrls: ['./management-subject.component.css']
})
export class ManagementSubjectComponent implements OnInit {
  
  form: any = FormGroup;
  SUBJECTS: Array<any> = [];

  constructor(
    private formBuild: FormBuilder,
    private subjectService: SubjectService 
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getAllSubject();
  }

  formInit(){
    this.form = this.formBuild.group({
      subjectId: [''],
      name:  [''],
      image:  ['']
    })
  }

  getAllSubject(){
    var json = {
      subjectId: 0
    }
    this.subjectService.getAll(json).subscribe(res =>{
      this.SUBJECTS = res.data;
    })
  }

  createSubject(){
    console.log(this.form.value);
    this.subjectService.create(this.form.value).subscribe(res => {
      if (res.errCode == 1) {
        this.getAllSubject();
        this.reset();
        alert(res.errDesc);
      } else {
        this.getAllSubject();
        this.reset();
        alert(res.errDesc);
      }
    })
  }

  updateSubject(){
    this.subjectService.update(this.form.value).subscribe(res => {
      if (res.errCode == 1) {
        alert(res.errDesc);
        this.getAllSubject();
        this.reset();
      } else {
        alert(res.errDesc);
        this.getAllSubject();
      }
    })
  }

  deleteSubject(){
    this.subjectService.detete(this.form.value).subscribe(res => {
      if (res.errCode == 1) {
        alert(res.errDesc);
        this.getAllSubject();
        this.reset();
      } else {
        alert(res.errDesc);
        this.getAllSubject();
        this.reset();
      }
    })
  }

  reset() {
    this.form.reset();
  }

  edit(item: any){
    this.form.setValue(item);
  }

}
