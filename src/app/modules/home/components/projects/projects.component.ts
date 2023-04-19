import { Component } from '@angular/core';
import { PROJECTS } from '@assets/data/project.mock';
import { Project } from '@models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
