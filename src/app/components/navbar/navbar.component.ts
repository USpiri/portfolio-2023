import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface NavItems {
  label:string;
  route:string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  icon = 'lock';
  navbarItems:NavItems[] = [
    { label:'About', route:'about' },
    { label:'Projects', route:'projects' },
    { label:'Experience', route:'experience' },
    { label:'Skills', route:'skills' },
    { label:'Blog', route:'blog' },
    { label:'Gallery', route:'gallery' },
    { label:'Contact', route:'contact' },
  ]

  constructor(private router: Router) {}

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
}
