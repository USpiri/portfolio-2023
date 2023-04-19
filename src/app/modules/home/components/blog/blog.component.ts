import { Component } from '@angular/core';
import { BLOGS } from '@assets/data/blog.mock';
import { Blog } from '@models';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogs: Blog[] = BLOGS;
}
