import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient) {}
  getallequipe(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/emp');
  }

}
