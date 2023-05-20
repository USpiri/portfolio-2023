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
      .pipe(tap((projects) => this.projectsSubject.next(projects)));
  }

  createProject(project: Project, image?: File): Observable<Project> {
    console.log(project);
    console.log(image);

    return this.http.post<Project>(`${API}`, project, httpOptions).pipe(
      tap((project) => {
        if (image) {
          try {
            this.uploadImage(image, project._id ?? '').subscribe();
          } catch (error) {
            console.log(error);
            throw new Error('ERROR');
          }
        } else {
          const currentProjects = this.projectsSubject.getValue();
          const updatedProjects = [...currentProjects, project];
          this.projectsSubject.next(updatedProjects);
        }
      })
    );
  }

  updateProject(project: Project, image?: File): Observable<Project> {
    return this.http
      .put<Project>(`${API}/${project._id}`, project, httpOptions)
      .pipe(
        tap((project) => {
          if (image) {
            try {
              this.uploadImage(image, project._id ?? '').subscribe();
            } catch (error) {
              console.log(error);
              throw new Error('ERROR');
            }
          } else {
            const currentProjects = this.projectsSubject.getValue();
            const updatedProjects = currentProjects.map((p) => {
              if (p._id === project._id) {
                return project;
              }
              return p;
            });
            this.projectsSubject.next(updatedProjects);
          }
        })
      );
  }

  private uploadImage(image: File, id: string): Observable<Project> {
    const formData: FormData = new FormData();
    formData.append('project-image', image, image.name);
    return this.http.put<Project>(`${API}/image/${id}`, formData).pipe(
      tap((project) => {
        const currentProjects = this.projectsSubject.getValue();
        const updatedProjects = currentProjects.map((p) => {
          if (p._id === project._id) {
            return project;
          }
          return p;
        });
        this.projectsSubject.next(updatedProjects);
      })
    );
  }

  deleteProject(id: string) {
    return this.http.delete<void>(`${API}/${id}`, httpOptions).pipe(
      tap(() => {
        const currentProjects = this.projectsSubject.getValue();
        const updatedProjects = currentProjects.filter((p) => p._id !== id);
        this.projectsSubject.next(updatedProjects);
      })
    );
  }
}
