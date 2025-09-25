import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput } from '@ionic/angular/standalone';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, FormsModule],
})
export class Tab1Page {
  badge: Badge = new Badge();
  badgeCount: number = 3;

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
    if (this.badgeCount === 0 && 'clearAppBadge' in navigator) {
      navigator.clearAppBadge().catch((error) => {
        console.log('Error clearing app badge', error);
      });
    }
    if ('setAppBadge' in navigator && this.badgeCount > 0) {
      navigator.setAppBadge(this.badgeCount).catch((error) => {
        console.log('Error setting app badge', error);
      });
    }
  }
}
