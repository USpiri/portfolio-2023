import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() src: string = '';
  @Input() width: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  click() {
    this.onClick.emit();
  }
}
