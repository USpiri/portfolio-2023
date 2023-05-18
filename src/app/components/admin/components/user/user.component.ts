import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USER } from '@assets/data/user.mock';
import { User } from '@models';
import { UserService } from '@shared/service/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User = USER;
  fileName = '';
  imageSrc = '';
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      title: ['', Validators.required],
      description: [[], Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      location: ['', Validators.required],
      image: [''],
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
    let file: File;
    if (ev.files?.[0]) {
      file = ev.files?.[0];
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
      return;
    }
  }

  clear() {
    this.fileName = '';
    this.imageSrc = this.user.image?.imageSrc ?? '';
  }
}
