import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { API_DEV } from '../app.constants';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  addresses = [];

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  searchAddress(address){
    return this.http
    .get<any>(`${API_DEV}/searchaddress/${address}`,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
