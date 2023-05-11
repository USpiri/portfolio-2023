import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SKILLS } from '@assets/data/skill.mock';
import { Skill } from '@models';
import { SkillsService } from '@shared/service/user/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'tech', 'options'];
  skills = SKILLS;
  fileName = '';
  showForm = false;
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder, private skillService: SkillsService) {
    this.skillsForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      percentage: ['', Validators.required],
      icon: ['', Validators.required],
      iconFamily: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.skillService.skills$.subscribe((skills) => {
      this.skills = skills;
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
