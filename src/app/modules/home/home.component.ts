import { Component, OnInit, inject } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { ProjectsService } from './shared/services/project.service';
import { ExperiencesService } from './shared/services/experiences.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  scrollPosition = 0;
  windowHeight = 0;
  documentHeight = 0;

  userService = inject(UserService);
  projectsService = inject(ProjectsService);
  experienceService = inject(ExperiencesService);

  ngOnInit(): void {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
    this.onWindowScroll();
    this.userService.getUser().subscribe();
    this.projectsService.getProjects().subscribe();
    this.experienceService.getExperiences().subscribe();
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
