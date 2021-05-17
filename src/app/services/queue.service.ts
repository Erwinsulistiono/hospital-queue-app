import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queue } from '../Queue.interface';

const httpOtions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getQueue(): Observable<Queue[]> {
    return this.http.get<Queue[]>(this.apiUrl);
  }

  addQueue(queue: Queue): Observable<Queue> {
    return this.http.post<Queue>(this.apiUrl, queue, httpOtions);
  }

  deleteQueue(queue: Queue): Observable<Queue> {
    const url = `${this.apiUrl}/${queue.id}`;
    return this.http.delete<Queue>(url);
  }

  updateQueue(queue: Queue): Observable<Queue> {
    const url = `${this.apiUrl}/${queue.id}`;
    queue.isFinished = true;
    return this.http.put<Queue>(url, queue, httpOtions);
  }
}
