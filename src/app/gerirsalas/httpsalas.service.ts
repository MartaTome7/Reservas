import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpSalasService {
  private urlGetAll = 'https://localhost:44387/api/Salas';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.urlGetAll);
  }
}
