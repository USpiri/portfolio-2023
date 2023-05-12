import { Component } from '@angular/core';
import { Experience } from '@models';
import { ExperiencesService } from '@shared/service/user/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences: Experience[] = [];
  constructor(private experienceService: ExperiencesService) {
    this.experienceService.experiences$.subscribe(
      (experiences) => (this.experiences = experiences)
    );
  }
}
