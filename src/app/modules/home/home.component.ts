import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../shared/service/user/user.service';
import { ProjectsService } from '../../shared/service/user/project.service';
import { ExperiencesService } from '../../shared/service/user/experiences.service';
import { SkillsService } from '../../shared/service/user/skills.service';
import { forkJoin } from 'rxjs';
import { LoaderService } from '@shared/service/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  scrollPosition = 0;
  windowHeight = 0;
  documentHeight = 0;
  loading = true;
  errorView = false;

  userService = inject(UserService);
  projectsService = inject(ProjectsService);
  experienceService = inject(ExperiencesService);
  skillService = inject(SkillsService);
  loader = inject(LoaderService);

  ngOnInit(): void {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
    this.onWindowScroll();
    this.loader.loading$.subscribe((state) => (this.loading = state));
    forkJoin([
      this.userService.getUser(),
      this.projectsService.getProjects(),
      this.experienceService.getExperiences(),
      this.skillService.getSkills(),
    ]).subscribe({
      next: () => {
        this.loader.displayLoader(false);
        setTimeout(() => {
          this.onWindowScroll();
        }, 11);
        this.errorView = false;
      },
      error: () => {
        this.loader.displayLoader(false);
        this.errorView = true;
      },
    });
  }

  onWindowScroll() {
    this.scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      0;
    this.documentHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight || 0;
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
