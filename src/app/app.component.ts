import { Component } from '@angular/core';
import { AuthService } from '@shared/service/auth/auth.service';
import { LoaderService } from '@shared/service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  loading = true;
  constructor(private authService: AuthService, private loader: LoaderService) {
    this.loader.loading$.subscribe((state) => (this.loading = state));
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
    }
  }
}
