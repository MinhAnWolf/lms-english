import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommandURL } from 'src/app/shares/const/ManageURLCommand';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }

  getAll(json: any) {
    return this.http.post<any>(CommandURL.GET_ALL_LESSON, json);
  }

  getByBookAndUnit(idl: number, idb: number, idu: number) {
    return this.http.post<any>(
      CommandURL.GET_BY_BOOK_AND_UNIT_LESSON, {}, {
        params: new HttpParams().set("idl", idl).set("idb", idb).set("idu", idu)
      });
  }

  create(json: any) {
    return this.http.post<any>(CommandURL.CREATE_LESSON, json);
  }

  update(json: any) {
    return this.http.post<any>(CommandURL.UPDATE_LESSON, json);
  }

  delete(json: any) {
    return this.http.post<any>(CommandURL.DELETE_LESSON, json);
  }

  upload(json: any) {
    return this.http.post<any>(CommandURL.UPLOAD_LESSON, json);
  }

  showFile(name: string) {
    return this.http.post<any>(CommandURL.SHOW_LESSON, {}, {
      params: new HttpParams().set("name", name)
    });
  }

}
