import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() src = '';
  @Input() width = '';
  @Output() imageClick: EventEmitter<unknown> = new EventEmitter();

  click() {
    this.imageClick.emit();
  }
}
