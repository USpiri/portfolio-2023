import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login';
import { AuthService } from '@shared/service/auth/auth.service';

export interface NavItems {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  icon = 'lock';
  navbarItems: NavItems[] = [
    { label: 'About', route: 'about' },
    { label: 'Projects', route: 'projects' },
    { label: 'Experience', route: 'experience' },
    { label: 'Skills', route: 'skills' },
    { label: 'Blog', route: 'blog' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Contact', route: 'contact' },
  ];
  isLoggedIn = false;

  dialog = inject(MatDialog);
  router = inject(Router);
  auth = inject(AuthService);

  ngOnInit(): void {
    this.auth.isLoggedIn$.subscribe((state) => (this.isLoggedIn = state));
  }

  focusComponent(componentName: string) {
    const element = document.getElementById(componentName);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView();
      }, 100);
    }
  }

  goTo(component: string) {
    this.router.navigate(['/']).then(() => {
      this.focusComponent(component);
    });
  }

  login() {
    this.dialog.open(LoginComponent);
  }
}
