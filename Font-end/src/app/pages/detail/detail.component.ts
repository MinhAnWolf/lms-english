import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/core/services/bookService';
import { LessonService } from 'src/app/core/services/lesson.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  idb: any;
  idu: any;

  listLesson: any = [];
  lesson: any;
  content: any;

  srcVideo: any;
  videos: any = [];
  srcAudio: any;
  audios: any = [];
  pages: any = [];

  constructor(
    private http: LessonService,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.idb = this.route.snapshot.queryParamMap.get('idb');
    this.idu = this.route.snapshot.queryParamMap.get('idu');
    this.getListLesson();
    this.getContent();
  }

  getListLesson() {
    this.http.getByBookAndUnit(0, this.idb, this.idu).subscribe(res => {
      this.listLesson = res.data;
    })
  }

  getLesson(lesson: any) {
    this.http.getByBookAndUnit(lesson.lessonId, lesson.bookId, lesson.unitId).subscribe(res => {
      if (res.data) {
        this.clearAll();
        var data = res.data[0];
        this.lesson = data;
        this.videos = data.videos.split("#");
        this.audios = data.audios.split("#");
        this.pages = data.pages.split(" ");
      }
    })
  }

  getContent() {
    var json = {
      bookId: this.idb,
      subjectId: 0
    }
    this.bookService.getAll(json).subscribe(res => {
      var content = res.data[0].content;
      if (content != ''){
        this.content = content.split(".")[0];
      }
    })
  }

  getVideo(index: number) {
    this.clearDataSrc();
    this.http.showFile(this.videos[index]).subscribe(res => {
      this.srcVideo = res.data;
    })
  }

  getAudio(index: number) {
    this.clearDataSrc();
    this.http.showFile(this.audios[index]).subscribe(res => {
      this.srcAudio = res.data;
    })
  }

  clearAll() {
    this.videos = [];
    this.audios = [];
    this.clearDataSrc();
  }

  clearDataSrc() {
    this.srcVideo = null;
    this.srcAudio = null;
  }

}
