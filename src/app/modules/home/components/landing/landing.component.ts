import { Component } from '@angular/core';
import { USER } from '@assets/data/user.mock';
import { User } from '@models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  user: User = USER;
}
