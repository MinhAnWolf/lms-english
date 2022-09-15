import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommandURL } from 'src/app/shares/const/ManageURLCommand';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(json: any) {
    return this.http.post<any>(CommandURL.GET_ALL_BOOK, json);
  }

  create(json: any) {
    return this.http.post<any>(CommandURL.CREATE_BOOK, json);
  }

  update(json: any) {
    return this.http.post<any>(CommandURL.UPDATE_BOOK, json);
  }

  detete(json: any) {
    return this.http.post<any>(CommandURL.DELETE_BOOK, json);
  }

  upload(json: any) {
    return this.http.post<any>(CommandURL.UPLOAD_BOOK, json);
  }

}