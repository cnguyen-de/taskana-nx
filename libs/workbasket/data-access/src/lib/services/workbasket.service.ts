import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workbasket, WorkbasketRepresentation } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WorkbasketService {
  api = 'http://localhost:8080/taskana/api/v1/workbaskets';
  constructor(private http: HttpClient) {}

  getWorkbaskets() {
    return this.http.get<WorkbasketRepresentation>(this.api);
  }

  getWorkbasketById(workbasketId: string) {
    return this.http.get<Workbasket>(`${this.api}/${workbasketId}`);
  }
}
