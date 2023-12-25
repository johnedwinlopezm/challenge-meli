import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { catchError, filter, map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        'name': 'john edwin',
        'lastname': 'lopez marulanda',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return next.handle(request).pipe(catchError((err) => {
      return err;
    }))
      .pipe(
        filter((event: any) => event instanceof HttpResponse),
        map(
          (event: HttpResponse<any>) => {
            return event;
          })
      );
  }
}
