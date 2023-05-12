import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { StorageService } from './storage.service';
import { LoginRequest, LoginResponse } from 'src/app/models/login.interface';
import { BehaviorSubject, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const API = `${environment.API}/auth`;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN = 'TOKEN';
  private readonly EXPIRATION = 'EXPIRATION_TIME';

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  // displayLoader(state: boolean) {
  //   this.loaderSubject.next(state);
  // }

  constructor(private http: HttpClient, private storage: StorageService) {}

  login(login: LoginRequest) {
    return this.http
      .post<LoginResponse>(`${API}/login`, login, httpOptions)
      .pipe(
        tap((response) => {
          this.doLoginUser(response.token);
          this.isLoggedInSubject.next(true);
        })
      );
  }

  logout(): void {
    this.doLogoutUser();
    this.isLoggedInSubject.next(false);
  }

  getJwtToken(): string {
    return this.storage.getItem(this.TOKEN) ?? '';
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  isTokenExpired(): boolean {
    const expirationTime = this.storage.getItem(this.EXPIRATION);
    if (expirationTime === null) {
      return true;
    }
    const now = new Date().getTime();
    const expiration = parseInt(expirationTime, 10);
    return now > expiration;
  }

  private doLoginUser(token: string) {
    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24hs from now
    this.storage.setItem(this.TOKEN, token);
    this.storage.setItem(this.EXPIRATION, expirationTime.toString());
  }

  private doLogoutUser(): void {
    this.storage.removeItem(this.TOKEN);
    this.storage.removeItem(this.EXPIRATION);
  }
}
