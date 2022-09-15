import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCarousel, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/core/services/bookService';
import { LessonService } from 'src/app/core/services/lesson.service';
import { UnitService } from 'src/app/core/services/unitService';
import { ModalConfirmDeleteComponent } from './modal-confirm-delete/modal-confirm-delete.component';

@Component({
  selector: 'app-management-video',
  templateUrl: './management-video.component.html',
  styleUrls: ['./management-video.component.css']
})
export class ManagementVideoComponent implements OnInit {

  formLesson!: FormGroup;
  lessons: any;
  books: any;
  units: any;

  isSelectVideo: boolean = false;
  filesVideo: any = [];
  isSelectAudio: boolean = false;
  filesAudio: any = [];

  constructor(
    private modalService: NgbModal,
    private lessonService: LessonService,
    private toastService: ToastrService,
    private bookService: BookService,
    private unitService: UnitService
  ) { }

  ngOnInit(): void {
    this.initFormLesson();
    this.getLessons();
    this.getBooks();
  }

  initFormLesson() {
    this.formLesson = new FormGroup({
      lessonId: new FormControl(null),
      name: new FormControl(null, Validators.required),
      bookId: new FormControl(null, Validators.required),
      unitId: new FormControl(null, Validators.required),
      pages: new FormControl(null, Validators.required),
      videos: new FormControl(''),
      audios: new FormControl(''),
    })
  }

  get f() {
    return this.formLesson.controls;
  }

  getLessons() {
    var json = {}
    this.lessonService.getAll(json).subscribe(res => {
      this.lessons = res.data;
    })
  }

  getBooks() {
    var json = {
      subjectId: 0
    };
    this.bookService.getAll(json).subscribe(res => {
      this.books = res.data;
    })
  }

  getUnitByBook() {
    if (this.f['bookId'].value != null) {
      var json = {
        bookId: this.f['bookId'].value
      }
      this.unitService.getAll(json).subscribe(res => {
        this.units = res.data;
      })
    }
  }

  uploadFiles(event: any, type: any, file: any): any {
    var files = event.target.files;
    var result = file;
    for (let i = 0; i < files.length; i++) {
      // check kiểu dữ liệu
      var mimeType = files[i].type;
      if (mimeType.match(type)) {
        result.push(files[i]);
      } else {
        this.toastService.error("File: " + files[i].name + " không được hỗ trợ!");
      }
    }
    return result;
  }

  selectOnVideo(event: any) {
    this.filesVideo = this.uploadFiles(event, /video\/mp4/, this.filesVideo);
    this.f['videos'].setValue(this.addNameFile(this.filesVideo));
  }

  selectOnAudio(event: any) {
    this.filesAudio = this.uploadFiles(event, /audio\/*/, this.filesAudio);
    this.f['audios'].setValue(this.addNameFile(this.filesAudio));
  }

  addNameFile(files: any): string {
    var filesName = '';
    for (let i = 0; i < files.length; i++) {
      filesName += files[i].name;
      if (i < files.length - 1) {
        filesName += "#";
      }
    }
    return filesName;
  }

  removeFile(index: Number, type: string) {
    switch (type) {
      case "video":
        this.filesVideo.splice(index, 1);
        this.f['videos'].setValue(this.addNameFile(this.filesVideo));
        break;
      case "audio":
        this.filesAudio.splice(index, 1);
        this.f['audios'].setValue(this.addNameFile(this.filesAudio));
        break;
    }
  }

  uploadFilesService(file: any) {
    for (let i = 0; i < file.length; i++) {
      var formData = new FormData();
      formData.append('files', file[i]);
      this.lessonService.upload(formData).subscribe();
    }
  }

  onSumbit() {
    if (this.formLesson.invalid) {
      return;
    }

    if (!this.isSelectVideo) {
      this.f['videos'].setValue('');
      this.filesVideo = '';
    }

    if (!this.isSelectAudio) {
      this.f['audios'].setValue('');
      this.filesAudio = '';
    }

    this.lessonService.create(this.formLesson.value).subscribe(res => {
      if (res.errCode == 1) {
        this.uploadFilesService(this.filesVideo);
        this.uploadFilesService(this.filesAudio);
        this.getLessons();
        this.clearData();
        this.toastService.success(res.errDesc);
        return;
      }
      this.toastService.error(res.errDesc);
      return;
    })
  }

  editLesson(item: any) {
    this.clearData();
    this.formLesson.setValue(item);

    if (item.videos != '') {
      var videos = item.videos.split("#");
      this.isSelectVideo = true;
      for (let i = 0; i < videos.length; i++) {
        this.filesVideo.push({ name: videos[i] });
      }
    }

    if (item.audios != '') {
      var audios = item.audios.split("#");
      this.isSelectAudio = true;
      for (let i = 0; i < audios.length; i++) {
        this.filesAudio.push({ name: audios[i] });
      }
    }
  }

  deleteLesson(item: any) {
    const modalHref = this.modalService.open(ModalConfirmDeleteComponent, { centered: true });
    modalHref.componentInstance.item = item;
    modalHref.componentInstance.actionLoading.subscribe((childrenCall: any) => {
      this.getLessons();
    })
  }

  clearData() {
    this.initFormLesson();
    this.filesAudio = [];
    this.filesVideo = [];
    this.isSelectAudio = false;
    this.isSelectVideo = false;
  }

}
