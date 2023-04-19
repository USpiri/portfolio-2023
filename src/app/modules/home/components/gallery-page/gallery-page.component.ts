import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
})
export class GalleryPageComponent {
  router: Router = inject(Router);
  toGallery(): void {
    this.router.navigate(['gallery']);
  }
}
