import { Component } from '@angular/core';
import { Project } from '@models';
import { ProjectsService } from '@shared/service/user/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [];
  constructor(private projectsService: ProjectsService) {
    this.projectsService.projects$.subscribe(
      (projects) => (this.projects = projects)
    );
  }
}
