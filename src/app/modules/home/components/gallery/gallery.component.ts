import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  constructor(private router: Router){}
  toGallery():void{
    this.router.navigate(['gallery']);
  }
}
