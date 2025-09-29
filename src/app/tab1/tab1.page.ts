import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  ModalController,
  AlertController,
  ToastController,
} from '@ionic/angular/standalone';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import { MoreInformationPage } from '../more-information/more-information.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    FormsModule,
  ],
})
export class Tab1Page {
  badge: Badge = new Badge();
  badgeCount: number = 3;
  infoModal: ModalController = inject(ModalController);
  alertController: AlertController = inject(AlertController);
  toastController: ToastController = inject(ToastController);

  constructor() {}

  ngOnInit() {
    this.badge.set(this.badgeCount);
  }

  setBadgeCount(count: number) {
    // use plugin
    this.badgeCount = count;
    if (this.badgeCount === 0) {
      this.badge.clear();
    } else {
      this.badge.set(this.badgeCount);
    }

    // notify tabs page
    const evt = new CustomEvent('badgeCount', { detail: this.badgeCount });
    window.dispatchEvent(evt);

    // use native api, fallback
    // if (this.badgeCount === 0 && 'clearAppBadge' in navigator) {
    //   navigator.clearAppBadge().catch((error) => {
    //     console.log('Error clearing app badge', error);
    //   });
    // }
    // if ('setAppBadge' in navigator && this.badgeCount > 0) {
    //   navigator.setAppBadge(this.badgeCount).catch((error) => {
    //     console.log('Error setting app badge', error);
    //   });
    // }
  }

  showToast = async () => {
    const toast = await this.toastController.create({
      message: 'This is a toast message.',
      duration: 2000,
    });
    toast.present();
  };

  openAlert = async () => {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
        },
      ],
    });

    alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  };

  openMoreInformation = async () => {
    const modal = await this.infoModal.create({
      component: MoreInformationPage,
      initialBreakpoint: 0.75,
      breakpoints: [0.75, 1],
      expandToScroll: false,
    });
    return await modal.present();
  };
}
