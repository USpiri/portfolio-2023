import { Component } from '@angular/core';
import { AuthService } from '@shared/service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  constructor(private authService: AuthService) {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
    }
  }
}
