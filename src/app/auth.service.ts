import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class AuthService {
  private isAuth = false;

  login(): void {
    this.isAuth = true;
  }

  logout(): void {
    this.isAuth = false;
  }

  isAuthenticated(): Promise<boolean> {
    console.log(this.isAuth);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
