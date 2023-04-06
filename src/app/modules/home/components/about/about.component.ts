import { Component } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { USER } from 'src/assets/data/user.mock';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  user: User = USER;
  getAge(birth: Date):number {
    const currentDate: Date = new Date();
    const diffTime: number = Math.abs(
      currentDate.getTime() - birth.getTime()
    );
    const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 365.25);
  }
}
