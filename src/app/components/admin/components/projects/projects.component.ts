import { Component, OnInit } from '@angular/core';
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
import { ProjectsService } from '@shared/service/user/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  displayedColumns: string[] = ['position', 'name', 'tech', 'options'];
  projects: Project[] = [];
  fileName = '';
  imageSrc = '';
  showForm = false;
  updateProject = false;
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService
  ) {
    this.projectForm = this.fb.group({
      _id: [''],
      title: ['', Validators.required],
      tags: [[], Validators.required],
      description: ['', Validators.required],
      longDescription: ['', Validators.required],
      github: ['', Validators.required],
      link: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.projectService.projects$.subscribe(
      (projects) => (this.projects = projects)
    );
  }

  selectProject(project: Project) {
    this.projectForm.patchValue(project);
    this.imageSrc = project.image?.thumbnailUrl ?? '';
    this.showForm = true;
    this.updateProject = true;
  }

  toggleUpload() {
    this.showForm = !this.showForm;
    this.projectForm.reset();
    this.clear();
    this.updateProject = false;
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
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
      return;
    }
  }

  clear() {
    this.fileName = '';
    this.imageSrc = '';
  }
}
