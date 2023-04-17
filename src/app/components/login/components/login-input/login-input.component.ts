import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss']
})
export class LoginInputComponent {
  
  @Input() type:string = 'text';
  @Input() label:string = ''
  @Input() value:string = '';
  @Input() isSecret:boolean = false;
  @Input() cursorView:boolean = true;
  @Output() keyupEnter:EventEmitter<any> = new EventEmitter();
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('input') inputElement!:ElementRef;

  get text(): string {
    return this.isSecret? this.value
      .split('')
      .map(() => '*')
      .join('') : this.value;
  }

  setFocus() {
    this.inputElement.nativeElement.focus();
  }

}
