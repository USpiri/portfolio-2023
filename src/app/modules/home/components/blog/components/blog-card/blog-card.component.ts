import { Component, Input } from '@angular/core';
import { Blog } from '@models';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() blog: Blog = {
    title: '',
    description: '',
    author: '',
    date: new Date(),
    tags: [],
    link: '',
  };
}
