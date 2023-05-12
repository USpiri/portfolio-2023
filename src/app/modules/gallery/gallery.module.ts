import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { MaterialModule } from './shared/material.module';
import { ImageComponent, ImageDialogComponent } from './components';
import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [GalleryComponent, ImageComponent, ImageDialogComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MaterialModule,
    ComponentsModule,
  ],
})
export class GalleryModule {}
