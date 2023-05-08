import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {
  ExperiencesComponent,
  GalleryComponent,
  ProjectsComponent,
  SkillsComponent,
  UserComponent,
} from './components';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediaComponent } from './components/media/media.component';

@NgModule({
  declarations: [
    AdminComponent,
    ExperiencesComponent,
    GalleryComponent,
    ProjectsComponent,
    SkillsComponent,
    UserComponent,
    MediaComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [AdminComponent],
})
export class AdminModule {}
