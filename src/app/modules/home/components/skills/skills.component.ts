import { Component } from '@angular/core';
import { Skill } from '@models';
import { SkillsService } from '@shared/service/user/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = [];
  constructor(private skillService: SkillsService) {
    this.skillService.skills$.subscribe((skills) => (this.skills = skills));
  }
}
