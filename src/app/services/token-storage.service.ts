import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  //save token inside session storage in the browser
  public saveToken(token:string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  //retrieve token from session storage
  public getToken(): String | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  //clear token
  public signOut(): void {
    window.sessionStorage.clear();
  }

  //save user inside session storage in the browser
  public saveUser(user:any): void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  //retrieve user from session storage
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);

    if(user){
      return JSON.parse(user);
    }
    return {}

  }
}
