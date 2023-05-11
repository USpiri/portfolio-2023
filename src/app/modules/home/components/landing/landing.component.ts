import { Component } from '@angular/core';
import { USER } from '@assets/data/user.mock';
import { User } from '@models';
import { UserService } from '@shared/service/user/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  user: User = USER;
  constructor(private userService: UserService) {
    this.userService.user$.subscribe((user) => (this.user = user));
  }
}
