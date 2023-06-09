import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '@environments/environment';
import { USER } from '@assets/data/user.mock';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const API = `${environment.API}/user`;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(USER);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http
      .get<User>(`${API}/${environment.USER_ID}`, httpOptions)
      .pipe(tap((user) => this.userSubject.next(user)));
  }

  updateUser(user: User, image?: File): Observable<User> {
    return this.http
      .put<User>(`${API}/${environment.USER_ID}`, user, httpOptions)
      .pipe(
        tap((user) => {
          if (image) {
            try {
              this.uploadImage(image).subscribe();
            } catch (error) {
              throw new Error('ERROR');
            }
          } else {
            this.userSubject.next(user);
          }
        })
      );
  }

  private uploadImage(image: File): Observable<User> {
    const formData: FormData = new FormData();
    formData.append('profile-image', image);
    return this.http
      .put<User>(`${API}/image/${environment.USER_ID}`, formData)
      .pipe(tap((user) => this.userSubject.next(user)));
  }
}
