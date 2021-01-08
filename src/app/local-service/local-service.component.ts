import {Component} from '@angular/core';
import {AppCounterService} from '../services/app-counter.service';
import {LocalCounterService} from '../services/local-counter.service';

@Component({
  selector: 'app-local-service',
  templateUrl: './local-service.component.html',
  styleUrls: ['./local-service.component.scss'],
  providers: [LocalCounterService]
})
export class LocalServiceComponent {

  constructor(public appCounterService: AppCounterService,
              public localCounterSevice: LocalCounterService) {
  }

}
