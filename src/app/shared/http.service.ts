import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    test = "test";
    constructor(private http: HttpClient) { }
    apiPostObservable(option): Observable<any> {
        return this.http.post(option.url, option.data)
    }
    apiGetObservable(option): Observable<any> {
        return this.http.post(option.url, option.data)
    }
}