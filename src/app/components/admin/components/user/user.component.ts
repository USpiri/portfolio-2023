import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { USER } from '@assets/data/user.mock';
import { User } from '@models';
import { UserService } from '@shared/service/user/user.service';
import { AdminLoaderService } from '../../shared/admin-loader.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User = USER;
  userForm: FormGroup;
  fileName = '';
  imageSrc = '';

  image: File | undefined;

  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private snackBar: MatSnackBar = inject(MatSnackBar);
  private loader = inject(AdminLoaderService);

  constructor() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      description: [[], Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      location: ['', Validators.required],
    });
    this.userService.user$.subscribe((user) => {
      this.user = user;
      this.userForm.patchValue(this.user);
      this.imageSrc = user.image?.src ?? '';
    });
  }
  ngOnInit(): void {
    const description = this.userForm.get('description')?.value.join('\n');
    this.userForm.get('description')?.setValue(description);
  }

  onFileSelected(event: Event) {
    const ev = event.target as HTMLInputElement;
    if (ev.files?.[0]) {
      this.image = ev.files?.[0];
      this.fileName = this.image.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(this.image);
      return;
    }
  }

  clear() {
    this.fileName = '';
    this.imageSrc = this.user.image?.src ?? '';
  }

  submit() {
    const updatedUser: User = { ...this.user, ...this.userForm.value };
    if (!this.userForm.valid) {
      this.loader.displayLoader(false);
      return;
    }
    this.userService
      .updateUser(updatedUser, this.image)
      .pipe(finalize(() => this.loader.displayLoader(false)))
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
