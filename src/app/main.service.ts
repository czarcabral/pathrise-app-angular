import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getJobBoards(): Observable<any> {
    return this.http.get("http://localhost:8080/api/jobBoards");
  }

  getJobsByJobSource(jobBoard: string): Observable<any> {
    return this.http.get("http://localhost:8080/api/jobs/"+jobBoard);
  }
}
