import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss'],
})
export class LoginInputComponent {
  @Input() type = 'text';
  @Input() label = '';
  @Input() value = '';
  @Input() isSecret = false;
  @Input() cursorView = true;
  @Output() keyupEnter: EventEmitter<unknown> = new EventEmitter();
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('input') inputElement!: ElementRef;

  get text(): string {
    return this.isSecret
      ? this.value
          .split('')
          .map(() => '*')
          .join('')
      : this.value;
  }

  setFocus() {
    this.inputElement.nativeElement.focus();
  }
}
