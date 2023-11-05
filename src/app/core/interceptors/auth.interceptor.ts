import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /**intercepts the service request and adds the headers*/
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const UserToken = JSON.parse(sessionStorage.getItem("userActual") as any);
        if (UserToken) {
            const headers = new HttpHeaders({
                "Authorization":  "Bearer"+UserToken.token,
                'Content-Type': 'application/json'
            });
            const cloned = req.clone({
                headers
            });
            console.log("se agrego el tocken al interceptor");
            return next.handle(cloned);
        }else {
            console.log("No existe el token de seguridad");
            return next.handle(req);
        }
    }
}