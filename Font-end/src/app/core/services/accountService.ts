import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CommandURL } from 'src/app/shares/const/ManageURLCommand';

@Injectable({
    providedIn: 'root'
})
export class AccountService {


    constructor(private http: HttpClient,

        ) { }
    
    getAll(json: any) {
        return this.http.post<any>(CommandURL.GET_ALL_ACCOUNT,json,);      
    }

    login(json:any){
        return this.http.post<any>(CommandURL.LOGIN_ACCOUNT,json);
    }

    register(json:any){
        return this.http.post<any>(CommandURL.REGISTER_ACCOUNT,json);
    }

    update(json:any){
        return this.http.post<any>(CommandURL.UPDATE_ACCOUNT,json);
    }

    delete(json:any){
        return this.http.post<any>(CommandURL.DELETE_ACCOUNT,json);
    }

    isLogin(json:any){
        return this.http.post<any>(CommandURL.ISLOGIN_ACCOUNT,json);
    }   

    login_out(json:any){
        return this.http.post<any>(CommandURL.LOGINOUT_ACCOUNT,json);
    }
    
    change_password(json:any){
        return this.http.post<any>(CommandURL.CHAGE_PASSWORD,json);
    }

    checkRole(json: any) {
        return this.http.post<any>(CommandURL.CHECK_ROLE,json);
    }
}