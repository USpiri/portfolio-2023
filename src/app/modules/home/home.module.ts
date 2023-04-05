import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BlogComponent } from './components/blog/blog.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CodeBackgroundComponent } from './components/code-background/code-background.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    CodeBackgroundComponent,
    LandingComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    BlogComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
