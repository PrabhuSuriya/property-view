import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoader: Observable<boolean>;

  constructor(private loaderSvc: LoaderService) {
    this.showLoader = this.loaderSvc.showLoaderObs;
  }
}
