import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://openlibrary.org';

  constructor(private http: HttpClient) { }

  getCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.url}/subjects/${category}.json`)
  }

  getBookDetails(bookKey: string): Observable<any> {
    return this.http.get<any>(`${this.url}${bookKey}.json`)
  }
}
