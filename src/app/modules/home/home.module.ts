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
import { ExperienceCardComponent } from './components/experience/components/experience-card/experience-card.component';
import { BlogCardComponent } from './components/blog/components/blog-card/blog-card.component';
import { ComponentsModule } from '@shared/components/components.module';

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
    ExperienceCardComponent,
    BlogCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, ComponentsModule],
})
export class HomeModule {}
