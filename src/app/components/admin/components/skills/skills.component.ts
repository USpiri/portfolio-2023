import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SKILLS } from '@assets/data/skill.mock';
import { Skill } from '@models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  displayedColumns: string[] = ['position', 'name', 'tech', 'options'];
  dataSource = SKILLS;
  fileName = '';
  showForm = false;
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      percentage: ['', Validators.required],
      icon: ['', Validators.required],
      iconFamily: ['', Validators.required],
    });
  }

  selectSkill(skill: Skill) {
    this.skillsForm.patchValue(skill);
    this.showForm = true;
  }

  toggleUpload() {
    this.showForm = !this.showForm;
    this.skillsForm.reset();
  }
}
