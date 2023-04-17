import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.interface';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent {
  @Input() skill: Skill = {
    name: '',
    percentage: 0,
    icon: '',
  };
}
