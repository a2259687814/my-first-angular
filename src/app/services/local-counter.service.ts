import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
  coutner = 0;
  increase(): void{ this.coutner++; }
  decrease(): void{this.coutner--; }
}
