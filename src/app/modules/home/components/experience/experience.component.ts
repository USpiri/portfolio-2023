import { Component } from '@angular/core';
import { EXPERIENCES } from '@assets/data/experience.mock';
import { Experience } from '@models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCES;
}
