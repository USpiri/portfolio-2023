import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience.interface';
import { EXPERIENCES } from 'src/assets/data/experience.mock';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences:Experience[] = EXPERIENCES;
}
