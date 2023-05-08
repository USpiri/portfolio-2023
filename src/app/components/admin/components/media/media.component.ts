import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MEDIA } from '@assets/data/media.mock';
import { Media } from '@models';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent {
  media: Media = MEDIA;
  mediaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mediaForm = this.fb.group({
      _id: [''],
      twitter: ['', Validators.required],
      instagram: ['', Validators.required],
      github: ['', Validators.required],
      linkedin: ['', Validators.required],
    });
    this.mediaForm.patchValue(this.media);
  }
}
