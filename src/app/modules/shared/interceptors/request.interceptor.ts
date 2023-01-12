import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TStoFix } from '../../../types/common-types';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<TStoFix>,
        next: HttpHandler
    ): Observable<HttpEvent<TStoFix>> {
        const started = Date.now();
        return next.handle(req).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    console.log(
                        `Request for ${req.urlWithParams} took ${elapsed} ms.`
                    );
                }
            })
        );
    }
}
