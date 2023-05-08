import { Component } from '@angular/core';
import { PROJECTS } from '@assets/data/project.mock';
import { Project } from '@models';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  displayedColumns: string[] = ['position', 'name', 'tech', 'options'];
  dataSource = PROJECTS;
  fileName = '';
  showForm = false;
  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      _id: [''],
      title: ['', Validators.required],
      tags: [[], Validators.required],
      description: ['', Validators.required],
      longDescription: ['', Validators.required],
      github: ['', Validators.required],
      link: ['', Validators.required],
      image: [''],
    });
  }

  selectProject(project: Project) {
    this.projectForm.patchValue(project);
    this.showForm = true;
  }

  toggleUpload() {
    this.showForm = !this.showForm;
    this.projectForm.reset();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      const tagsControl = this.projectForm.get('tags') as FormArray;
      tagsControl.push(new FormControl(value));
    }
    event.chipInput.clear();
  }

  remove(tag: string): void {
    const tagsControl = this.projectForm.get('tags') as FormArray;
    const tags = tagsControl.value;
    const index = tags.indexOf(tag);

    if (index >= 0) {
      tagsControl.removeAt(index);
    }
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(tag);
      return;
    }
    const tags = this.projectForm.get('tags') as FormArray;
    const index = tags.value.indexOf(tag);
    if (index >= 0) {
      tags.patchValue([value], index);
    }
  }

  onFileSelected(event: Event) {
    const ev = event.target as HTMLInputElement;
    let file: File;
    if (ev.files?.[0]) {
      file = ev.files?.[0];
      this.fileName = file.name;
      return;
    }
  }
}
