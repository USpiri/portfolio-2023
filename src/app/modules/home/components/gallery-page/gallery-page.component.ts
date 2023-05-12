import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '@shared/service/loader.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
})
export class GalleryPageComponent {
  router: Router = inject(Router);
  loader = inject(LoaderService);
  toGallery(): void {
    this.router.navigate(['gallery']);
    this.loader.displayLoader(true);
  }
}
