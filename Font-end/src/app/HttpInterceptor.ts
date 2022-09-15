import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest } from "@angular/common/http";
import {Observable} from "rxjs";
 
@Injectable({
    providedIn: 'root'
})
export class AppHttpInterceptor implements HttpInterceptor {
    constructor() {
    }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: any = sessionStorage.getItem("Token");
        if (token){
            req = req.clone({ headers: req.headers.set('authentication', token) });
            console.log("token intercept "+token)
        }
        return next.handle(req);
    }
}