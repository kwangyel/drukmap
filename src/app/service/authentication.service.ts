import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Role } from '../model/Role';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';
export const IS_AUTHENTICATED = 'isAuthenticated';

interface User {
  name:string,
  role:Role
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  public authState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>

  constructor( private http: HttpClient, private router:Router) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("user")));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User{
    return this.userSubject.value;
  }

  public hasRole(role:Role){
    return this.isUserLoggedIn && this.userSubject.value.role === role;
  }

  validateLogin(user,password){
    if(user === "admin" && password === "123"){
      let userObject:User = {
        "name":"admin",
        "role": Role.Admin
      }
      localStorage.setItem('user',JSON.stringify(userObject));
      this.userSubject.next(userObject);
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/home']);
  }

  // validateLogin(cid, password) {
  //   return this.http.post<any>(`${API_URL}/login`, {
  //     cid,
  //     password
  //   }).pipe(
  //     map(
  //       data => {
  //         sessionStorage.setItem(AUTHENTICATED_USER, cid);
  //         sessionStorage.setItem(TOKEN, `Bearer ${data.access_token}`);
  //         this.authState.next(true);
  //         return data;
  //     }));
  // }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  setAuthenticatedUser(username) {
    sessionStorage.setItem(AUTHENTICATED_USER, username);
    this.authState.next(true);
  }

  isUserLoggedIn() {
    if (this.getAuthenticatedUser()) {
      return true;
    } else {
      return false;
    }
  }

  // logout() {
  //   sessionStorage.removeItem(AUTHENTICATED_USER);
  //   sessionStorage.removeItem(TOKEN);
  //   sessionStorage.removeItem('zoneId');
  //   sessionStorage.removeItem('userId');
  //   sessionStorage.removeItem('requestType');
  //   sessionStorage.removeItem('qrUUID');
  //   sessionStorage.removeItem('transactionType');
  //   sessionStorage.removeItem('qrCodeId');
  //   sessionStorage.removeItem('shopId');
  //   sessionStorage.removeItem('subZoneId');
  //   sessionStorage.removeItem('dzongkhagId');
  //   this.authState.next(false);
  // }

  getItem(key: string): any {
    return sessionStorage.getItem(key);
  }
}
