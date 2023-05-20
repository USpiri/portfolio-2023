import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ButtonLoaderService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loaderSubject.asObservable();

  displayLoader(state: boolean) {
    this.loaderSubject.next(state);
  }
}
