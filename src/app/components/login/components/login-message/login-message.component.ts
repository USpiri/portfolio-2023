import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-message',
  templateUrl: './login-message.component.html',
  styleUrls: ['./login-message.component.scss'],
})
export class LoginMessageComponent implements OnInit {
  @Input() type: 'error' | 'success' = 'error';
  @Input() code = '';
  @Output() codeChange = new EventEmitter<string>();
  message = '';
  showedMessage = '';
  showedCode = '';
  isShowedCode = false;

  ngOnInit() {
    this.message =
      this.type === 'success'
        ? 'Welcome Admin!'
        : 'Invalid username or Password. Try again.';
    this.animateMessage(this.message, this.code);
  }

  animateMessage(text: string, code: string) {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        this.showedMessage += text.charAt(i);
        i++;
      } else {
        if (code) {
          this.isShowedCode = true;
          this.animateCode(code);
        }
        clearInterval(interval);
      }
    }, 40);
  }

  async animateCode(text: string) {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        this.showedCode += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
  }
}
