import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { USER } from '@assets/data/user.mock';
import { SocialMedia } from '@models';
import { EmailService } from '@shared/service/user/email.service';
import { UserService } from '@shared/service/user/user.service';
import { finalize } from 'rxjs';
import { Email } from 'src/app/models/email.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  media: SocialMedia = USER.media;
  emailForm: FormGroup;
  loading = false;

  private snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private emailService = inject(EmailService);

  constructor() {
    this.userService.user$.subscribe((user) => (this.media = user.media));
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  sendMail() {
    if (this.emailForm.valid) {
      this.loading = true;
      const email: Email = this.emailForm.value;
      this.emailService
        .sendEmail(email)
        .pipe(
          finalize(() => {
            this.loading = false;
            this.resetFormValidation();
          })
        )
        .subscribe({
          next: () => {
            this.snackBar.open('Mail sended succesfully!', undefined, {
              duration: 2000,
            });
          },
          error: (err) => {
            this.snackBar.open(
              `Error sending email: ${err.error.error}`,
              undefined,
              {
                duration: 2000,
              }
            );
          },
        });
    }
  }

  resetFormValidation() {
    this.emailForm.markAsPristine();
    this.emailForm.markAsUntouched();
    this.emailForm.updateValueAndValidity();
  }
}
