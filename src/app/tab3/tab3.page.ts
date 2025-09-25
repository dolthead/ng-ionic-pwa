import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { shareOutline } from 'ionicons/icons';
import { share } from '../../services/shareService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, FormsModule],
})
export class Tab3Page {
  message: string = 'Test message';

  constructor() {
    addIcons({ shareOutline })
  }

  openModal() {
    alert('Modal would open here!');
  }

  handleShare() {
    share({ message: this.message });
  }
}
