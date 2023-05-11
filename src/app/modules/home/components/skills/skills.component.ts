import { Component } from '@angular/core';
import { SKILLS } from '@assets/data/skill.mock';
import { Skill } from '@models';
import { SkillsService } from '@shared/service/user/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = SKILLS;
  constructor(private skillService: SkillsService) {
    this.skillService.skills$.subscribe((skills) => (this.skills = skills));
  }
}
