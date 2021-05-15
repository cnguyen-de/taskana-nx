import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkbasketService {
  constructor(private http: HttpClient) {}

  getWorkbaskets() {
    return of([1, 2, 3, 4]);
  }
}
