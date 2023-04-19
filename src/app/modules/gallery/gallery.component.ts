import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from './components';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images: string[] = [
    '../../../assets/images/gallery/1.jpg',
    '../../../assets/images/gallery/2.jpg',
    '../../../assets/images/gallery/5.jpg',
    '../../../assets/images/gallery/3.jpg',
    '../../../assets/images/gallery/4.jpg',
    '../../../assets/images/gallery/6.jpg',
    '../../../assets/images/gallery/7.jpg',
    '../../../assets/images/gallery/8.jpg',
    '../../../assets/images/gallery/10.jpg',
  ];
  dialog:MatDialog = inject(MatDialog)

  openImage(image: string) {
    console.log('OPEN');

    this.dialog.open(ImageDialogComponent, {
      data: image,
    });
  }
}
