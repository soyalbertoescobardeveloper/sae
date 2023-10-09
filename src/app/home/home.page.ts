import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../services/data.service';
import { Message } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
  messages: any[] = []; 
  constructor(private http: HttpClient,
              ) {
              }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {
    this.http.get('https://handling-dev.sae.com.mx/api/agent/2').subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          this.messages = response;
        } else {
          console.error('La respuesta no es un array válido:', response);
        }
      },
      (error) => {
        console.error('Error al realizar la solicitud HTTP', error);
      }
    );
  }
  
}
