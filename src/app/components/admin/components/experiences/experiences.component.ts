import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EXPERIENCES } from '@assets/data/experience.mock';
import { Experience } from '@models';
import { ExperiencesService } from '@shared/service/user/experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'tech', 'options'];
  experiences = EXPERIENCES;
  fileName = '';
  showForm = false;
  experienceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private experienceService: ExperiencesService
  ) {
    this.experienceForm = this.fb.group({
      _id: [''],
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required],
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
  }

  toggleUpload() {
    this.showForm = !this.showForm;
    this.experienceForm.reset();
  }
}
