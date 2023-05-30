import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Skill } from '@models';
import { SkillsService } from '@shared/service/user/skills.service';
import { AdminLoaderService } from '../../shared/admin-loader.service';
import { finalize } from 'rxjs';

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
  private loader = inject(AdminLoaderService);

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
    const newSkill: Skill = {
      ...this.selectedSkill,
      ...this.skillsForm.value,
    };
    if (!this.showForm) {
      this.loader.displayLoader(false);
      return;
    }
    if (!this.skillsForm.valid) {
      Object.values(this.skillsForm.controls).forEach((control) => {
        control.markAsTouched();
      });
      this.loader.displayLoader(false);
      return;
    }
    const observable = this.update
      ? this.skillService.updateSkill(newSkill)
      : this.skillService.createSkill(newSkill);
    observable.pipe(finalize(() => this.toggleUpload())).subscribe({
      next: () => {
        this.snackBar.open(
          `Skill ${this.update ? 'updated' : 'added'} successfully`,
          undefined,
          {
            duration: 2000,
          }
        );
      },
      error: (err) => {
        console.log(err);
        this.snackBar.open(
          `Error ${this.update ? 'updating' : 'adding'} skill: ${
            err.error.error
          }`,
          undefined,
          {
            duration: 2000,
          }
        );
      },
    });
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
