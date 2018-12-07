import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // next faz a requisição final
        const loginService = this.injector.get(LoginService)
        if(loginService.isLoggedIn()){
            // clone deve ser usada pois o objeto request é imutável
            const authRequest = request.clone(
                {setHeaders:{'Authorization':`Bearer ${loginService.user.accessToken}`}})
            return next.handle(authRequest)
        }else{
            return next.handle(request)
        }
    }
}