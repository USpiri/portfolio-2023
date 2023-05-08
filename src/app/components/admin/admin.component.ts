import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  menu = [
    'User',
    'Projects',
    'Experiences',
    'Skills',
    'Social Media',
    'Gallery',
  ];
  selected = 'User';
  selectMenu(option: string) {
    this.selected = option;
  }
}
