import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from './components';
import { LoaderService } from '@shared/service/loader.service';
import { GalleryService } from '@shared/service/gallery/gallery.service';
import { Image } from '@models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];
  dialog: MatDialog = inject(MatDialog);
  loader = inject(LoaderService);
  gallery = inject(GalleryService);
  loading = true;
  errorView = false;

  ngOnInit(): void {
    this.loader.loading$.subscribe((state) => (this.loading = state));
    this.gallery.getImages().subscribe({
      next: (images) => {
        this.images = images;
        this.loader.displayLoader(false);
        this.errorView = false;
      },
      error: () => {
        this.loader.displayLoader(false);
        this.errorView = true;
      },
    });
  }
  openImage(image: Image) {
    this.dialog.open(ImageDialogComponent, {
      data: image,
    });
  }
}
