import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { MaterialModule } from './shared/material.module';
import { ImageComponent } from './components/image/image.component';
import { ImageDialogComponent } from './components/dialogs/image-dialog/image-dialog.component';

@NgModule({
  declarations: [GalleryComponent, ImageComponent, ImageDialogComponent],
  imports: [CommonModule, GalleryRoutingModule, MaterialModule],
})
export class GalleryModule {}
