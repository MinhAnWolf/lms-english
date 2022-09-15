import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommandURL } from 'src/app/shares/const/ManageURLCommand';

@Injectable({
    providedIn: 'root'
})
export class UnitService {

    constructor(private http: HttpClient) { }

    getAll(json: any) {
        return this.http.post<any>(CommandURL.GET_ALL_UNIT, json);
    }

    create(json: any) {
        return this.http.post<any>(CommandURL.CREATE_UNIT, json);
    }

    update(json: any) {
        return this.http.post<any>(CommandURL.UPDATE_UNIT, json);
    }

    delete(json: any) {
        return this.http.post<any>(CommandURL.DELETE_UNIT, json);
    }

}