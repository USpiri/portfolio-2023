import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  private experiencesSubject = new BehaviorSubject<Experience[]>([]);
  public experiences$ = this.experiencesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getExperiences(): Observable<Experience[]> {
    return this.http
      .get<Experience[]>(`${API}`, httpOptions)
      .pipe(tap((experience) => this.experiencesSubject.next(experience)));
  }

  createExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(`${API}`, experience, httpOptions).pipe(
      tap((experience) => {
        const currentExperiences = this.experiencesSubject.getValue();
        const updatedExperiences = [...currentExperiences, experience];
        this.experiencesSubject.next(updatedExperiences);
      })
    );
  }

  updateExperience(experience: Experience): Observable<Experience> {
    return this.http
      .put<Experience>(`${API}/${experience._id}`, experience, httpOptions)
      .pipe(
        tap((experience) => {
          const currentExperiences = this.experiencesSubject.getValue();
          const updatedExperiences = currentExperiences.map((e) => {
            if (e._id === experience._id) {
              return experience;
            }
            return e;
          });
          this.experiencesSubject.next(updatedExperiences);
        })
      );
  }

  deleteExperience(id: string) {
    return this.http.delete<void>(`${API}/${id}`, httpOptions).pipe(
      tap(() => {
        const currentExperiences = this.experiencesSubject.getValue();
        const updatedExperiences = currentExperiences.filter(
          (e) => e._id !== id
        );
        this.experiencesSubject.next(updatedExperiences);
      })
    );
  }
}
