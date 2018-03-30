
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class StudentService {
  topicURL = environment.url;
  constructor(private http: HttpClient) { }

  StudentService(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.topicURL + 'students', data, httpOptions);
  }

  allStudent(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.topicURL + 'students?format=json', httpOptions);
  }

  deleteStudent(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(this.topicURL + 'students/' + id + '?format=json', httpOptions);
  }
  getStudent(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.topicURL + 'students/' + id + '?format=json', httpOptions);
  }
  editStudent(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(this.topicURL + 'students/' + data.id + '?format=json', data , httpOptions);
  }

}
