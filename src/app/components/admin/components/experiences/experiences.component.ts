import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EXPERIENCES } from '@assets/data/experience.mock';
import { Experience } from '@models';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  displayedColumns: string[] = ['position', 'name', 'tech', 'options'];
  dataSource = EXPERIENCES;
  fileName = '';
  showForm = false;
  experienceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.experienceForm = this.fb.group({
      _id: [''],
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required],
    });
  }

  selectExperience(experience: Experience) {
    this.showForm = true;
    this.experienceForm.patchValue(experience);
  }

  toggleUpload() {
    this.showForm = !this.showForm;
    this.experienceForm.reset();
  }
}
