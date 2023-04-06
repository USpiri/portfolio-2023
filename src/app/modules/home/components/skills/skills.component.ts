import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill.interface';
import { SKILLS } from 'src/assets/data/skill.mock';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills:Skill[] = SKILLS;
}
