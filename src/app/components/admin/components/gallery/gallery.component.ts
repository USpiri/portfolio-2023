import { Component, OnInit, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Image } from '@models';
import { GalleryService } from '@shared/service/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];
  image!: File;
  fileName = '';
  imageSrc = '';
  uploadImage = false;
  loading = false;

  imageTypes = [
    { label: 'Nature', value: 'NATURE' },
    { label: 'Portrait', value: 'PORTRAIT' },
  ];

  selectFormControl = new FormControl('', Validators.required);
  private galleryService = inject(GalleryService);

  ngOnInit(): void {
    this.galleryService
      .getImages()
      .subscribe((images) => (this.images = images));
  }

  onFileSelected(event: Event) {
    const ev = event.target as HTMLInputElement;
    if (ev.files?.[0]) {
      this.image = ev.files?.[0];
      this.fileName = this.image.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(this.image);
      return;
    }
  }

  submit() {
    if (this.selectFormControl.valid) {
      this.galleryService
        .uploadImage(this.image, 'NATURE')
        .subscribe((image) => this.images.push(image));
    } else {
      this.selectFormControl.markAsTouched();
    }
  }

  toggleUpload() {
    this.uploadImage = !this.uploadImage;
    this.clear();
  }

  clear() {
    this.fileName = '';
    this.imageSrc = '';
    this.selectFormControl.reset();
  }
}
