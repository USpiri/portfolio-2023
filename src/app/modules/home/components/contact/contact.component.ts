import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private snackBar: MatSnackBar) {}
  sendMail() {
    this.snackBar.open('Mail sended succesfully!', undefined, {
      duration: 2000
    });
  }
}
