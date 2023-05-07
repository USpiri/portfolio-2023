import { Component, Input } from '@angular/core';
import { Experience } from '@models';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
  @Input() experience: Experience = {
    jobTitle: '',
    company: '',
    description: '',
    link: '',
  };
}
