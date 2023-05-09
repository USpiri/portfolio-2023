import {
  HttpRequest,
  HttpHandler,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '@shared/service/auth/auth.service';

@Injectable()
export class HttpInterceptorService {
  authService = inject(AuthService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    if (this.authService.isLoggedIn()) {
      const token = this.authService.getJwtToken();
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
];
