import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ExperiencesService } from '@shared/service/user/experiences.service';
import { ProjectsService } from '@shared/service/user/project.service';
import { SkillsService } from '@shared/service/user/skills.service';
import { UserService } from '@shared/service/user/user.service';
import { finalize, forkJoin } from 'rxjs';
import {
  ExperiencesComponent,
  ProjectsComponent,
  SkillsComponent,
  UserComponent,
} from './components';
import { MediaComponent } from './components/media/media.component';
import { AdminLoaderService } from './shared/admin-loader.service';
import { AuthService } from '@shared/service/auth/auth.service';

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
  loading = false;
  loadingData = true;

  @ViewChild(UserComponent) user!: UserComponent;
  @ViewChild(SkillsComponent) skill!: SkillsComponent;
  @ViewChild(ExperiencesComponent) experience!: ExperiencesComponent;
  @ViewChild(MediaComponent) media!: MediaComponent;
  @ViewChild(ProjectsComponent) project!: ProjectsComponent;

  userService = inject(UserService);
  projectsService = inject(ProjectsService);
  experienceService = inject(ExperiencesService);
  skillService = inject(SkillsService);
  loader = inject(AdminLoaderService);
  auth = inject(AuthService);

  constructor() {
    this.loader.loading$.subscribe((state) => (this.loading = state));
    this.loader.loadingData$.subscribe((state) => (this.loadingData = state));
  }

  ngOnInit(): void {
    forkJoin([
      this.userService.getUser(),
      this.projectsService.getProjects(),
      this.experienceService.getExperiences(),
      this.skillService.getSkills(),
    ])
      .pipe(finalize(() => this.loader.displayDataLoader(false)))
      .subscribe();
  }

  selectMenu(option: string) {
    this.selected = option;
  }

  saveChange() {
    this.loader.displayLoader(true);
    switch (this.selected) {
      case 'User':
        this.user.submit();
        break;

      case 'Skills':
        this.skill.submit();
        break;

      case 'Experiences':
        this.experience.submit();
        break;

      case 'Social Media':
        this.media.submit();
        break;

      case 'Projects':
        this.project.submit();
        break;

      default:
        break;
    }
  }

  logout() {
    this.auth.logout();
  }
}
