import { Component, OnInit, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Image } from '@models';
import { GalleryService } from '@shared/service/gallery/gallery.service';
import { finalize } from 'rxjs';

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

  categories = ['All', 'Nature', 'Portrait', 'Cinematography'];
  selectedCategory = 'All';

  imageTypes = [
    { label: 'Nature', value: 'NATURE' },
    { label: 'Portrait', value: 'PORTRAIT' },
  ];

  selectFormControl = new FormControl('', Validators.required);
  private galleryService = inject(GalleryService);
  private snackBar: MatSnackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.galleryService
      .getImages()
      .subscribe((images) => (this.images = images));
  }

  selectCategory(category: string) {
    if (category === this.selectedCategory) return;
    this.selectedCategory = category;
    if (category === 'Cinematography') {
      this.selectedCategory = 'All';
    }
    const type = this.selectedCategory !== 'All' ? category.toUpperCase() : '';
    this.galleryService.getImages(type).subscribe({
      next: (images) => {
        this.images = images;
      },
      error: () => {
        this.images = [];
      },
    });
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

  delete(id: string) {
    this.galleryService.deleteImage(id).subscribe({
      next: () => {
        this.images = this.images.filter((i) => i._id !== id);
        this.snackBar.open('Image deleted successfully', undefined, {
          duration: 2000,
        });
      },
      error: (err) => {
        this.snackBar.open(
          `Error deleting image: ${err.error.error}`,
          undefined,
          {
            duration: 2000,
          }
        );
      },
    });
  }

  submit() {
    this.loading = true;
    if (this.selectFormControl.valid) {
      this.galleryService
        .uploadImage(this.image, this.selectFormControl.value ?? undefined)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe({
          next: () => {
            this.selectCategory(this.selectFormControl.value ?? '');
            this.toggleUpload();
            this.snackBar.open('Image added successfully', undefined, {
              duration: 2000,
            });
          },
          error: (err) => {
            this.snackBar.open(
              `Error adding image: ${err.error.error}`,
              undefined,
              {
                duration: 2000,
              }
            );
          },
        });
    } else {
      this.selectFormControl.markAsTouched();
      this.loading = false;
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
