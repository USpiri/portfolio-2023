import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '@models';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent {
  paragraphs: string[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public project: Project,
    private dialogRef: MatDialogRef<ProjectModalComponent>
  ) {
    this.paragraphs = this.project.longDescription.split('\n');
  }
  close() {
    this.dialogRef.close();
  }
}
