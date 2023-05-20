import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from './components';
import { LoaderService } from '@shared/service/loader.service';
import { GalleryService } from '@shared/service/gallery/gallery.service';
import { Image } from '@models';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  categories = ['All', 'Nature', 'Portrait', 'Cinematography'];
  selectedCategory = 'All';
  images: Image[] = [];
  loading = true;
  errorView = false;

  dialog: MatDialog = inject(MatDialog);
  loader = inject(LoaderService);
  gallery = inject(GalleryService);

  ngOnInit(): void {
    this.loader.loading$.subscribe((state) => (this.loading = state));
    this.gallery
      .getImages()
      .pipe(finalize(() => this.loader.displayLoader(false)))
      .subscribe({
        next: (images) => {
          this.images = images;
          this.errorView = false;
        },
        error: () => {
          this.errorView = true;
        },
      });
  }
  openImage(image: Image) {
    this.dialog.open(ImageDialogComponent, {
      data: image,
    });
  }
  selectCategory(category: string) {
    if (category === this.selectedCategory) return;
    this.loader.displayLoader(true);
    this.selectedCategory = category;
    if (category === 'Cinematography') {
      this.selectedCategory = 'All';
    }
    const type = this.selectedCategory !== 'All' ? category.toUpperCase() : '';
    this.gallery.getImages(type).subscribe({
      next: (images) => {
        this.images = images;
        this.loader.displayLoader(false);
        this.errorView = false;
      },
      error: () => {
        this.images = [];
        this.loader.displayLoader(false);
        this.errorView = true;
      },
    });
  }
}
