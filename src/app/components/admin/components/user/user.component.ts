import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { USER } from '@assets/data/user.mock';
import { User } from '@models';
import { UserService } from '@shared/service/user/user.service';
import { ButtonLoaderService } from '../../shared/button-loader.service';

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
  private loader = inject(ButtonLoaderService);

  constructor() {
    this.userForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      title: ['', Validators.required],
      description: [[], Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.userService.user$.subscribe((user) => (this.user = user));
    this.userForm.patchValue(this.user);
    this.imageSrc = this.user.image?.imageSrc ?? '';
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
    this.imageSrc = this.user.image?.imageSrc ?? '';
  }

  submit() {
    const updatedUser: User = { ...this.user, ...this.userForm.value };
    this.userService.updateUser(updatedUser, this.image).subscribe({
      next: () => {
        this.snackBar.open('User updated successfully', undefined, {
          duration: 2000,
        });
        this.loader.displayLoader(false);
      },
      error: (err) => {
        this.snackBar.open(
          `Error updating user: ${err.error.error}`,
          undefined,
          {
            duration: 2000,
          }
        );
        this.loader.displayLoader(false);
      },
    });
  }
}
