import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  activeRequest = 0;

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.activeRequest === 0) {
      this.spinner.show();
    }

    this.activeRequest++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequest--;
        if (this.activeRequest === 0) {
          this.spinner.hide();
        }
      })
    );
  }
}
