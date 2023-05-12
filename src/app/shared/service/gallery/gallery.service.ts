import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Image } from '@models';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const API = `${environment.API}/gallery`;
@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  http: HttpClient = inject(HttpClient);

  getImages(type = ''): Observable<Image[]> {
    return this.http.get<Image[]>(`${API}/${type}`, httpOptions);
  }
}
