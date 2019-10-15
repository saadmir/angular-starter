import { Injectable } from '@angular/core';
// import {Observable} from "rxjs/Observable";
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import { map, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const BASE_URL = '//code.saadmir.com/api';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  doGet(endpoint: string = ''): Observable<any> {
    return this.http.get<any[]>(`${BASE_URL}/${endpoint}`).pipe(
      map((data) => data)
    );
  }

}
