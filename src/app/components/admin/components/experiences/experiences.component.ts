import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Experience } from '@models';
import { ExperiencesService } from '@shared/service/user/experiences.service';
import { ButtonLoaderService } from '../../shared/button-loader.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'tech', 'options'];
  experiences: Experience[] = [];
  selectedExperience: Experience = this.restartExperience();
  fileName = '';
  update = false;
  showForm = false;
  experienceForm: FormGroup;

  private fb = inject(FormBuilder);
  private experienceService = inject(ExperiencesService);
  private snackBar: MatSnackBar = inject(MatSnackBar);
  private loader = inject(ButtonLoaderService);

  constructor() {
    this.experienceForm = this.fb.group({
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      description: ['', Validators.required],
      link: [''],
    });
  }
  ngOnInit(): void {
    this.experienceService.experiences$.subscribe((exps) => {
      this.experiences = exps;
    });
  }

  selectExperience(experience: Experience) {
    this.showForm = true;
    this.experienceForm.patchValue(experience);
    this.selectedExperience = experience;
  }

  toggleUpload() {
    this.showForm = !this.showForm;
    this.experienceForm.reset();
    this.selectedExperience = this.restartExperience();
    this.loader.displayLoader(false);
  }

  deleteExperience(id: string) {
    this.experienceService.deleteExperience(id).subscribe({
      next: () => {
        this.snackBar.open('Experience deleted successfully', undefined, {
          duration: 2000,
        });
      },
      error: (err) => {
        this.snackBar.open(
          `Error deleting experience: ${err.error.error}`,
          undefined,
          {
            duration: 2000,
          }
        );
      },
    });
  }

  submit() {
    if (this.showForm && this.experienceForm.valid) {
      const newExperience: Experience = {
        ...this.selectedExperience,
        ...this.experienceForm.value,
      };
      const observable = this.update
        ? this.experienceService.updateExperience(newExperience)
        : this.experienceService.createExperience(newExperience);
      observable.pipe(finalize(() => this.toggleUpload())).subscribe({
        next: () => {
          this.snackBar.open(
            `Experience ${this.update ? 'updated' : 'added'} successfully`,
            undefined,
            {
              duration: 2000,
            }
          );
        },
        error: (err) => {
          this.snackBar.open(
            `Error ${this.update ? 'updating' : 'adding'} experience: ${
              err.error.error
            }`,
            undefined,
            {
              duration: 2000,
            }
          );
        },
      });
    } else {
      Object.values(this.experienceForm.controls).forEach((control) => {
        control.markAsTouched();
      });
      this.loader.displayLoader(false);
    }
  }

  restartExperience(): Experience {
    return {
      jobTitle: '',
      company: '',
      description: '',
      link: '',
    };
  }
}
