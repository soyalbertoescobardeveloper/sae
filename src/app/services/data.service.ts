import { Injectable } from '@angular/core';

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
  public messages: Message[] = [
    {
      fromName: '189',
      subject: 'New event: Trip to Vegas',
      date: 'PART 91',
      id: 0,
      read: false,
      tail: 'Tai test',
      airportDeparture: 'MMZO',
      airportArrival: 'MMTO',
      eta: '12/07/2023',
      etd: '12/07/2023',
      flightType: 'Diplomatic',
      status: 0,
    },
   
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
