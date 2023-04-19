import { Component } from '@angular/core';
import { SKILLS } from '@assets/data/skill.mock';
import { Skill } from '@models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = SKILLS;
}
