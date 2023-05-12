import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Project } from '@models';
import { BehaviorSubject, Observable, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const API = `${environment.API}/project`;
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  public projects$ = this.projectsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http
      .get<Project[]>(`${API}`, httpOptions)
      .pipe(tap((project) => this.projectsSubject.next(project)));
  }
}
