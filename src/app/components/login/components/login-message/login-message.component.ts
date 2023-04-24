import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-message',
  templateUrl: './login-message.component.html',
  styleUrls: ['./login-message.component.scss'],
})
export class LoginMessageComponent implements OnInit{
  @Input() type: 'error' | 'success' = 'error';
  message = '';
  showedMessage = '';

  ngOnInit(): void {
    this.message =
      this.type === 'success'
        ? 'Welcome Admin!'
        : 'Invalid username or Password. Try again.';
    this.animateMessage(this.message);
  }

  animateMessage(text: string) {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        this.showedMessage += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
  }
}
