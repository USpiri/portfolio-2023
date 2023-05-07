import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from './shared/material.module';
import {
  AboutComponent,
  BlogComponent,
  CodeBackgroundComponent,
  ContactComponent,
  ExperienceComponent,
  GalleryPageComponent,
  LandingComponent,
  ProjectsComponent,
  SkillCardComponent,
  SkillsComponent,
} from './components';
import { ProjectComponent } from './components/projects/components/project/project.component';
import { ProjectModalComponent } from './components/projects/components/project-modal/project-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    CodeBackgroundComponent,
    LandingComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    BlogComponent,
    GalleryPageComponent,
    ContactComponent,
    AboutComponent,
    SkillCardComponent,
    ProjectComponent,
    ProjectModalComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
