import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { USER } from '@assets/data/user.mock';
import { Media } from '@models';
import { UserService } from '@shared/service/user/user.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  media: Media = USER.media;
  mediaForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.mediaForm = this.fb.group({
      _id: [''],
      twitter: ['', Validators.required],
      instagram: ['', Validators.required],
      github: ['', Validators.required],
      linkedin: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.userService.user$.subscribe((user) =>
      this.mediaForm.patchValue(user.media)
    );
  }
}
