import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { USER } from '@assets/data/user.mock';
import { User } from '@models';
import { UserService } from '@shared/service/user/user.service';
import { ButtonLoaderService } from '../../shared/button-loader.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  mediaForm: FormGroup;
  user: User = USER;

  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private snackBar: MatSnackBar = inject(MatSnackBar);
  private loader = inject(ButtonLoaderService);

  constructor() {
    this.mediaForm = this.fb.group({
      twitter: ['', Validators.required],
      instagram: ['', Validators.required],
      github: ['', Validators.required],
      linkedin: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.user = user;
      this.mediaForm.patchValue(user.media);
    });
  }
  submit() {
    if (!this.mediaForm.valid) {
      Object.values(this.mediaForm.controls).forEach((control) => {
        control.markAsTouched();
      });
      this.loader.displayLoader(false);
      return;
    }
    const updatedUser: User = { ...this.user, media: this.mediaForm.value };
    this.userService
      .updateUser(updatedUser)
      .pipe(
        finalize(() => {
          this.loader.displayLoader(false);
        })
      )
      .subscribe({
        next: () => {
          this.snackBar.open('User updated successfully', undefined, {
            duration: 2000,
          });
        },
        error: (err) => {
          this.snackBar.open(
            `Error updating user: ${err.error.error}`,
            undefined,
            {
              duration: 2000,
            }
          );
        },
      });
  }
}
