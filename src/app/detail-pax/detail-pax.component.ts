import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';


@Component({
  selector: 'app-detail-pax',
  templateUrl: './detail-pax.component.html',
  styleUrls: ['./detail-pax.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DetailPaxComponent  implements OnInit {
  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.message = this.data.getMessageById(parseInt(id, 10));
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Detail Operation' : '';
  }

}
