import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog.interface';
import { BLOGS } from 'src/assets/data/blog.mock';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogs:Blog[] = BLOGS;
}
