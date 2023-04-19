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
  ],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
