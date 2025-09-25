import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule]
})
export class Tab2Page {
  message: string = 'Hello from Ionic';

  constructor() {}

  handleSpeak() {
    const speech = new SpeechSynthesisUtterance(this.message);
    speechSynthesis.speak(speech);
  }
}
