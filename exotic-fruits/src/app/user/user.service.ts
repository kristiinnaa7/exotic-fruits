import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = null;
    }
  }

  login() {
    this.user = {
      firstName: 'Jack',
      email: 'jacksmith127@gmail.com',
      phoneNumber: '885-888-888',
      password: '123123',
      id: 'asdasdsadsadsa',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }

  register(
    username: string,
    email: string,
    phoneNumber: string,
    password: string,
    rePassword: string
  ): Observable<UserForAuth> {
    const newUser: UserForAuth = {
      firstName: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      id: this.generateUserId(),
    };

    this.user = newUser;
    localStorage.setItem(this.USER_KEY, JSON.stringify(newUser));
    return of(newUser);
  }

  private generateUserId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
