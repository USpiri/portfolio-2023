import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new BehaviorSubject<boolean>(true);
  loading$ = this.loaderSubject.asObservable();

  displayLoader(state: boolean) {
    this.loaderSubject.next(state);
  }
}
