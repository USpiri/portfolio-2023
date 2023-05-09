import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EXPERIENCES } from '@assets/data/experience.mock';
import { environment } from '@environments/environment';
import { Experience } from '@models';
import { BehaviorSubject, Observable, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const API = `${environment.API}/experience`;
@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  private experiencesSubject = new BehaviorSubject<Experience[]>(EXPERIENCES);
  public experiences$ = this.experiencesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getExperiences(): Observable<Experience[]> {
    return this.http
      .get<Experience[]>(`${API}`, httpOptions)
      .pipe(tap((experience) => this.experiencesSubject.next(experience)));
  }
}
