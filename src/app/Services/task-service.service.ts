import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private _http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this._http.delete<Task>(url);
  }
  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this._http.put<Task>(url, task, httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    return this._http.post<Task>(this.apiUrl, task, httpOptions);
  }
  // clearTask(task: Task): Observable<Task> {
  //   const url = `${this.apiUrl}/${task}`;
  //   return this._http.delete<Task>(url);
  // }
}
