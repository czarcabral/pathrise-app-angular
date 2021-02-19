import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getJobBoards(): Observable<any> {
    return this.http.get("https://cabral-pathrise-app-java.herokuapp.com/api/jobBoards");
  }

  getJobsByJobSource(jobBoard: string): Observable<any> {
    return this.http.get("https://cabral-pathrise-app-java.herokuapp.com/api/jobs/"+jobBoard);
  }
}

// return this.http.get("http://cabral-pathrise-app-java.herokuapp.com/api/jobs/" + jobBoard);
