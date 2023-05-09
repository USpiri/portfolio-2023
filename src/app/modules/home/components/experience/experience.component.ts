import { Component } from '@angular/core';
import { EXPERIENCES } from '@assets/data/experience.mock';
import { Experience } from '@models';
import { ExperiencesService } from '@modules/home/shared/services/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCES;
  constructor(private experienceService: ExperiencesService) {
    this.experienceService.experiences$.subscribe(
      (experiences) => (this.experiences = experiences)
    );
  }
}
