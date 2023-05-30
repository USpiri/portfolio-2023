import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminLoaderService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loaderSubject.asObservable();

  private dataSubject = new BehaviorSubject<boolean>(true);
  loadingData$ = this.dataSubject.asObservable();

  displayLoader(state: boolean) {
    this.loaderSubject.next(state);
  }

  displayDataLoader(state: boolean) {
    this.dataSubject.next(state);
  }
}
