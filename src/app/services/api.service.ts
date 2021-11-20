import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Contacts } from '../contacts';
import { throwError, Observable } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL = environment.baseURL;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  get(): Observable<any> {
    return this.http.get<any>(`${this.URL}`).pipe(retry(1), catchError(this.handleError));
  }

  public post(contact: Contacts): Observable<Contacts> {
    const body = JSON.stringify(contact);
    console.log(body);
    return this.http.post<Contacts>(this.URL + "post", body, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  public update(contact: Contacts) { }

  public getById(id: number) { }

  delete(id: number) {
    return this.http.delete<Contacts>(this.URL + "delete/" + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }
}