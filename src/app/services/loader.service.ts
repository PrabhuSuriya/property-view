import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private showLoader$ = new BehaviorSubject<boolean>(false);
  showLoaderObs = this.showLoader$.asObservable();

  constructor() { }

  toggleLoader(show) {
    this.showLoader$.next(show);
  }

  showLoader() {
    this.toggleLoader(true);
  }

  hideLoader() {
    this.toggleLoader(false);
  }


}
