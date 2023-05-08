import { Component } from '@angular/core';
import { IMAGES } from '@assets/data/images.mock';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images = IMAGES;
  fileName = '';
  imageSrc = '';
  uploadImage = false;

  onFileSelected(event: Event) {
    const ev = event.target as HTMLInputElement;
    let file: File;
    if (ev.files?.[0]) {
      file = ev.files?.[0];
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
      return;
    }
  }

  toggleUpload() {
    this.uploadImage = !this.uploadImage;
  }

  clear() {
    this.fileName = '';
    this.imageSrc = '';
  }
}
