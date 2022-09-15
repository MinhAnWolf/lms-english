import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommandURL } from 'src/app/shares/const/ManageURLCommand';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getAll(json: any) {
    return this.http.post<any>(CommandURL.GET_ALL_SUBJECT, json);
  }

  create(json: any) {
    return this.http.post<any>(CommandURL.CREATE_SUBJECT, json);
  }

  update(json: any) {
    return this.http.post<any>(CommandURL.UPDATE_SUBJECT, json);
  }

  detete(json: any) {
    return this.http.post<any>(CommandURL.DELETE_SUBJECT, json);
  }
  

}