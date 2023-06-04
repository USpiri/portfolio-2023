import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Email } from 'src/app/models/email.interface';

const API = `${environment.API}/email`;
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(email: Email): Observable<string> {
    const url = `${API}/${environment.USER_ID}`;
    return this.http.post<string>(url, email);
  }
}
