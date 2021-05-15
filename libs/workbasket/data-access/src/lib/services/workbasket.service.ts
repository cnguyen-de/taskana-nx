import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WorkbasketRepresentation } from '../..';

@Injectable({
  providedIn: 'root'
})
export class WorkbasketService {
  constructor(private http: HttpClient) {}

  getWorkbaskets() {
    return this.http.get<WorkbasketRepresentation>(
      'http://localhost:8080/taskana/api/v1/workbaskets'
    );
  }
}
