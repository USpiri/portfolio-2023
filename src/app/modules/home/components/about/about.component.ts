import { Component } from '@angular/core';
import { USER } from '@assets/data/user.mock';
import { User } from '@models';
import { UserService } from '@shared/service/user/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  user: User = USER;
  constructor(private userService: UserService) {
    this.userService.user$.subscribe((user) => (this.user = user));
  }

  getAge(birth: Date): number {
    const currentDate: Date = new Date();
    const diffTime: number = Math.abs(
      currentDate.getTime() - new Date(birth).getTime()
    );
    const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 365.25);
  }
}
