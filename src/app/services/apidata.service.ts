import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApidataService {
  baseurl: string = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}

  getUsersList(): Observable<any> {
    return this.http.get<any>(this.baseurl + '/users');
  }
}
