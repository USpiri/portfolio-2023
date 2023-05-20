import { Component, OnInit, inject } from '@angular/core';
import { Project } from '@models';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '@shared/service/user/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ButtonLoaderService } from '../../shared/button-loader.service';

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
  selectedProject: Project = this.restartProject();
  fileName = '';
  imageSrc = '';
  showForm = false;
  updateProject = false;
  projectForm: FormGroup;

  image: File | undefined;

  private fb = inject(FormBuilder);
  private projectService = inject(ProjectsService);
  private snackBar: MatSnackBar = inject(MatSnackBar);
  private loader = inject(ButtonLoaderService);

  constructor() {
    this.projectForm = this.fb.group({
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
    this.selectedProject = project;
    this.showForm = true;
    this.updateProject = true;
  }

  toggleUpload() {
    this.showForm = !this.showForm;
    this.projectForm.reset();
    this.clear();
    this.updateProject = false;
    this.loader.displayLoader(false);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      const tags = this.projectForm.get('tags')?.value ?? [];
      tags.push(value);
      this.projectForm.get('tags')?.setValue(tags);
    }
    event.chipInput.clear();
  }

  remove(tag: string): void {
    const tags = this.projectForm.get('tags')?.value;
    const index = tags.indexOf(tag);

    if (index >= 0) {
      tags.splice(index, 1);
      this.projectForm.get('tags')?.setValue(tags);
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
    if (ev.files?.[0]) {
      this.image = ev.files?.[0];
      this.fileName = this.image.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(this.image);
      return;
    }
  }

  clear() {
    this.fileName = '';
    this.imageSrc = this.selectedProject.image?.imageSrc ?? '';
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe({
      next: () => {
        this.snackBar.open('Project deleted successfully', undefined, {
          duration: 2000,
        });
      },
      error: (err) => {
        this.snackBar.open(
          `Error deleting project: ${err.error.error}`,
          undefined,
          {
            duration: 2000,
          }
        );
      },
    });
  }

  submit() {
    if (this.showForm) {
      const newProject: Project = {
        ...this.selectedProject,
        ...this.projectForm.value,
      };
      if (this.updateProject) {
        this.projectService.updateProject(newProject, this.image).subscribe({
          next: () => {
            this.snackBar.open('Project updated successfully', undefined, {
              duration: 2000,
            });
            this.toggleUpload();
          },
          error: (err) => {
            console.log(err);
            this.snackBar.open(
              `Error updating project: ${err.error.error}`,
              undefined,
              {
                duration: 2000,
              }
            );
            this.toggleUpload();
          },
        });
      } else {
        this.projectService.createProject(newProject, this.image).subscribe({
          next: () => {
            this.snackBar.open('Project added successfully', undefined, {
              duration: 2000,
            });
            this.toggleUpload();
          },
          error: (err) => {
            console.log(err);
            this.snackBar.open(
              `Error adding project: ${err.error.error}`,
              undefined,
              {
                duration: 2000,
              }
            );
            this.toggleUpload();
          },
        });
      }
    }
  }

  restartProject(): Project {
    return {
      title: '',
      tags: [],
      description: '',
      longDescription: '',
      github: '',
      link: '',
    };
  }
}
