import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
    const idTokenAd = localStorage.getItem("id_token_admin");
    const idTokenSp = localStorage.getItem("id_token_sp");
    const idTokenOp = localStorage.getItem("id_token_op");
    const idTokenSuperAd = localStorage.getItem("id_token_superAd");
    
        if (idTokenAd ) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer" + idTokenAd)
            });

            return next.handle(cloned);
        }else if (idTokenSp) {
          const cloned = req.clone({
            headers: req.headers.set("Authorization",
                "Bearer" + idTokenSp)
        });

        return next.handle(cloned);
        }else if (idTokenOp) {
          const cloned = req.clone({
            headers: req.headers.set("Authorization",
                "Bearer" + idTokenOp)
        });

        return next.handle(cloned);
        }else if (idTokenSuperAd) {
          const cloned = req.clone({
            headers: req.headers.set("Authorization",
                "Bearer" + idTokenSuperAd)
        });

        return next.handle(cloned);
        }
        else {
            return next.handle(req);
        } 
        
    }
  
  }

