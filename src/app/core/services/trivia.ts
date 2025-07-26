import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class Trivia {
  private baseUrl = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) {}

  getQuestions(amount: number, category: number, difficulty: string): Observable<any> {
    const url = `${this.baseUrl}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    return this.http.get(url);
  }
}
