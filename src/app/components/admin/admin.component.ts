import { Component, OnInit, inject } from '@angular/core';
import { ExperiencesService } from '@shared/service/user/experiences.service';
import { ProjectsService } from '@shared/service/user/project.service';
import { SkillsService } from '@shared/service/user/skills.service';
import { UserService } from '@shared/service/user/user.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  menu = [
    'User',
    'Projects',
    'Experiences',
    'Skills',
    'Social Media',
    'Gallery',
  ];
  selected = 'User';

  userService = inject(UserService);
  projectsService = inject(ProjectsService);
  experienceService = inject(ExperiencesService);
  skillService = inject(SkillsService);

  ngOnInit(): void {
    forkJoin([
      this.userService.getUser(),
      this.projectsService.getProjects(),
      this.experienceService.getExperiences(),
      this.skillService.getSkills(),
    ]).subscribe();
  }

  selectMenu(option: string) {
    this.selected = option;
  }
}
