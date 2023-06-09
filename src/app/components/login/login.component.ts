import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  inject,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginInputComponent } from './components';
import { AuthService } from '@shared/service/auth/auth.service';
import { LoginRequest } from 'src/app/models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('typer', { static: true }) typer!: ElementRef;
  @ViewChild('preconsole', { static: true }) preconsole!: ElementRef;
  @ViewChild('console', { static: true }) console!: ElementRef;
  @ViewChild('userInput') userInput!: LoginInputComponent;
  @ViewChild('passwordInput') passwordInput!: LoginInputComponent;

  usernameView = false;
  passwordView = false;
  errorView = false;
  successView = false;
  username = '';
  password = '';
  code = '';

  usernameTEST = 'Username';
  passwordTEST = '12345678';

  dialogRef = inject(MatDialogRef<LoginComponent>);
  auth = inject(AuthService);

  async ngOnInit(): Promise<void> {
    await this.addLine(
      'Welcome to DevlyConsole. Confirm your identity.',
      this.preconsole
    );
    await this.addLine('Press [ENTER] to proceed.', this.preconsole);
    await this.breakline(this.preconsole);
    this.usernameView = true;
    setTimeout(() => {
      try {
        this.userInput.setFocus();
      } catch {
        /* empty */
      }
    }, 10);
  }

  async onUsernameEnter() {
    this.passwordView = true;
    setTimeout(() => {
      this.passwordInput.setFocus();
    }, 10);
  }

  onSubmit() {
    this.usernameView = false;
    this.passwordView = false;
    this.code = '';
    this.errorView = false;
    const login: LoginRequest = {
      username: this.username,
      password: this.password,
    };
    this.auth.login(login).subscribe({
      next: () => {
        this.errorView = false;
        this.successView = true;
        setTimeout(() => {
          this.dialogRef.close();
        }, 1200);
      },
      error: (err) => {
        this.code = err.error.error;
        this.errorView = true;
        setTimeout(() => {
          this.username = '';
          this.password = '';
          this.usernameView = true;
          setTimeout(() => {
            this.userInput.setFocus();
          }, 10);
        }, 1600);
      },
    });
  }

  get maskedPassword(): string {
    return this.password
      .split('')
      .map(() => '*')
      .join('');
  }

  focusComponent() {
    if (this.passwordView) {
      setTimeout(() => {
        this.passwordInput.setFocus();
      }, 10);
    } else if (this.usernameView) {
      setTimeout(() => {
        this.userInput.setFocus();
      }, 10);
    }
  }

  async addLine(text: string, element: ElementRef): Promise<void> {
    return new Promise((resolve) => {
      const parrafo = document.createElement('p');
      element.nativeElement.appendChild(parrafo);
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          parrafo.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 40);
    });
  }

  async breakline(element: ElementRef): Promise<void> {
    return new Promise((resolve) => {
      const br = document.createElement('br');
      element.nativeElement.appendChild(br);
      resolve();
    });
  }
}
