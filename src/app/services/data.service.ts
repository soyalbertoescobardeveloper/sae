import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Message {
  fromName: string;
  tail: string;
  airportDeparture: string;
  airportArrival: string;
  eta: string;
  etd: string;
  flightType: string;
  status: number;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [];

  private apiUrl = 'http://sae-handling-v1.test/api/';

  constructor(private http: HttpClient) {}

  getOperationById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}get-operation/${id}`);
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}get-operation/${id}`);
  }
}
