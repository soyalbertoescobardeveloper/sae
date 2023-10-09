import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import { SharedDataService } from '../services/shared-data.service';
import * as FileSaver from 'file-saver';

interface MessageData {
  passengers?: PassengerData[];
}
interface PassengerData{
  pax_id: number;
  pax_name: string;
  pax_parental: string;
  pax_maternal: string;
  pax_pass_img?: string;
  pax_visa_img?: string;
  pax_pass_exp?: string;
  pax_visa_exp?: string;
}
@Component({
  selector: 'app-detail-pax',
  templateUrl: './detail-pax.component.html',
  styleUrls: ['./detail-pax.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DetailPaxComponent  implements OnInit {
  message: MessageData | undefined;
  pax: PassengerData | undefined;

  //private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor(private route: ActivatedRoute,private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    // Recuperar el objeto message de los parámetros de la ruta
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.message = this.sharedDataService.getMessage();
    const passengerIdToFind = id ? parseInt(id, 10) : null;
    if (this.message && this.message.passengers){
      this.pax = this.message.passengers.find(pax => pax.pax_id === passengerIdToFind);
      console.info('tag', this.pax)
    }
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Detail Operation' : '';
  }

  downloadFile() {
    const fileUrl = 'https://handling-dev.sae.com.mx/storage/documents/6524795aa1c9b.jpeg';
  
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        FileSaver.saveAs(blob, 'nombre-del-archivo.jpeg');
      })
      .catch(error => {
        console.error('Error al descargar el archivo', error);
      });
  }

}
