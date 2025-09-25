import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera, chatbubbles, home, informationCircle } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonBadge, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  badgeCount: number = 3;
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ home, chatbubbles, informationCircle, camera });
  }

  ngOnInit(): void {
    window.addEventListener('badgeCount', (e: Event) =>  {
      this.badgeCount = (e as CustomEvent).detail as number;
    });
  }
}
