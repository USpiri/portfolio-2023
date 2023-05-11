import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { USER } from '@assets/data/user.mock';
import { SocialMedia } from '@models';
import { UserService } from '@shared/service/user/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  media: SocialMedia = USER.media;
  snackBar: MatSnackBar = inject(MatSnackBar);

  constructor(private userService: UserService) {
    this.userService.user$.subscribe((user) => (this.media = user.media));
  }

  sendMail() {
    this.snackBar.open('Mail sended succesfully!', undefined, {
      duration: 2000,
    });
  }
}
