import { Component } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { USER } from 'src/assets/data/user.mock';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  user:User = USER;
}
