import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DevEnvInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let req = request.clone({
      headers: request.headers.set('Content-Type', 'application/hal+json')
    });

    req = req.clone({
      headers: req.headers.set('Authorization', 'Basic YWRtaW46YWRtaW4=')
    });

    return next.handle(req);
  }
}
