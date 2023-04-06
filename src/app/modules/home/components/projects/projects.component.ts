import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { PROJECTS } from 'src/assets/data/project.mock';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects:Project[] = PROJECTS;
}
