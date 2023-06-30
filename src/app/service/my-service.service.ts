
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get('https://portfolio-m5av.onrender.com', { withCredentials: true });
    }
}
