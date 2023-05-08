import { Component, Input } from '@angular/core';
import { Skill } from '@models';

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
    iconFamily: '',
  };
}
