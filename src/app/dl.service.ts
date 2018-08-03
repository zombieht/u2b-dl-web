import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DlService {
  private url = '/api/post'
  private doc = '/api/get'
  constructor(private http: HttpClient) { }

  getAddress(address: any): Observable<any> {
    var rq = {
      address: address
    }
    return this.http.post(this.url, rq, httpOptions).pipe(

      catchError(this.handleError<any>('post'))
    );
  }

  getDocument(): Observable<any>{
    return this.http.get(this.doc, httpOptions).pipe(
      catchError(this.handleError<any>('get'))
    );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
