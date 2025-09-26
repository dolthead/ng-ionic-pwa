import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.page.html',
  styleUrls: ['./more-information.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonIcon]
})
export class MoreInformationPage implements OnInit {
  infoModal: ModalController = inject(ModalController);

  constructor() {
    addIcons({ closeOutline });
  }

  ngOnInit() {
  }

}
