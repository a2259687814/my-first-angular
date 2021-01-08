import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable({providedIn: 'root'})

export class AppCounterService{
  constructor(private logService: LogService) {}

  coutner = 0;
  increase(): void{
    this.logService.log('increse log ++');
    this.coutner++; }
  decrease(): void{this.coutner--; }
}
