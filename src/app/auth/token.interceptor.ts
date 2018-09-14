
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
console.log('interceptor called');
        req=req.clone({
            setHeaders:{
                Authorization:'Basic'
            }
        });
        return next.handle(req);
    }

}