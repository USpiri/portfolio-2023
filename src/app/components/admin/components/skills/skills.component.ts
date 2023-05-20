import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Skill } from '@models';
import { SkillsService } from '@shared/service/user/skills.service';
import { ButtonLoaderService } from '../../shared/button-loader.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'tech', 'options'];
  skills: Skill[] = [];
  selectedSkill: Skill = this.restartSkill();
  fileName = '';
  showForm = false;
  update = false;
  skillsForm: FormGroup;

  private fb = inject(FormBuilder);
  private skillService = inject(SkillsService);
  private snackBar: MatSnackBar = inject(MatSnackBar);
  private loader = inject(ButtonLoaderService);

  constructor() {
    this.skillsForm = this.fb.group({
      name: ['', Validators.required],
      percentage: ['', Validators.required],
      icon: ['', Validators.required],
      iconFamily: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.skillService.skills$.subscribe((skills) => (this.skills = skills));
  }

  selectSkill(skill: Skill) {
    this.skillsForm.patchValue(skill);
    this.showForm = true;
    this.update = true;
    this.selectedSkill = skill;
  }

  toggleUpload() {
    this.showForm = !this.showForm;
    this.skillsForm.reset();
    this.update = false;
    this.selectedSkill = this.restartSkill();
    this.loader.displayLoader(false);
  }

  deleteSkill(id: string) {
    this.skillService.deleteSkill(id).subscribe({
      next: () => {
        this.snackBar.open('Skill deleted successfully', undefined, {
          duration: 2000,
        });
      },
      error: (err) => {
        this.snackBar.open(
          `Error deleting skill: ${err.error.error}`,
          undefined,
          {
            duration: 2000,
          }
        );
      },
    });
  }

  submit() {
    if (this.showForm && this.skillsForm.valid) {
      const newSkill: Skill = {
        ...this.selectedSkill,
        ...this.skillsForm.value,
      };
      if (this.update) {
        this.skillService.updateSkill(newSkill).subscribe({
          next: () => {
            this.snackBar.open('Skill updated successfully', undefined, {
              duration: 2000,
            });
            this.toggleUpload();
          },
          error: (err) => {
            this.snackBar.open(
              `Error updating skill: ${err.error.error}`,
              undefined,
              {
                duration: 2000,
              }
            );
            this.toggleUpload();
          },
        });
      } else {
        this.skillService.createSkill(newSkill).subscribe({
          next: () => {
            this.snackBar.open('Skill added successfully', undefined, {
              duration: 2000,
            });
            this.toggleUpload();
          },
          error: (err) => {
            this.snackBar.open(
              `Error adding skill: ${err.error.error}`,
              undefined,
              {
                duration: 2000,
              }
            );
            this.toggleUpload();
          },
        });
      }
    } else {
      Object.values(this.skillsForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }

  restartSkill(): Skill {
    return {
      name: '',
      percentage: 0,
      icon: '',
      iconFamily: '',
    };
  }
}
