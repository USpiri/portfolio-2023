import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Skill } from '@models';
import { BehaviorSubject, Observable, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const API = `${environment.API}/skill`;
@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsSubject = new BehaviorSubject<Skill[]>([]);
  public skills$ = this.skillsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http
      .get<Skill[]>(`${API}`, httpOptions)
      .pipe(tap((skills) => this.skillsSubject.next(skills)));
  }

  createSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${API}`, skill, httpOptions).pipe(
      tap((skill) => {
        const currentSkills = this.skillsSubject.getValue();
        const updatedSkills = [...currentSkills, skill];
        this.skillsSubject.next(updatedSkills);
      })
    );
  }

  updateSkill(skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${API}/${skill._id}`, skill, httpOptions).pipe(
      tap((skill) => {
        const currentSkills = this.skillsSubject.getValue();
        const updatedSkills = currentSkills.map((s) => {
          if (s._id === skill._id) {
            return skill;
          }
          return s;
        });
        this.skillsSubject.next(updatedSkills);
      })
    );
  }

  deleteSkill(id: string) {
    return this.http.delete<void>(`${API}/${id}`, httpOptions).pipe(
      tap(() => {
        const currentSkills = this.skillsSubject.getValue();
        const updatedSkills = currentSkills.filter((s) => s._id !== id);
        this.skillsSubject.next(updatedSkills);
      })
    );
  }
}
