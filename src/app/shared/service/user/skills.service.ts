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
}
