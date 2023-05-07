import { Component, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '@models';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project: Project = {
    title: '',
    tags: [],
    description: '',
    longDescription: '',
    github: '',
    link: '',
    image: '',
  };

  dialog: MatDialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(ProjectModalComponent, {
      data: this.project,
      autoFocus: false,
    });
  }
}
