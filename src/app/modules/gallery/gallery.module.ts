import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { MaterialModule } from './shared/material.module';
import { ImageComponent, ImageDialogComponent } from './components';

@NgModule({
  declarations: [GalleryComponent, ImageComponent, ImageDialogComponent],
  imports: [CommonModule, GalleryRoutingModule, MaterialModule],
})
export class GalleryModule {}
