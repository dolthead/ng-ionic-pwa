import { Share } from '@capacitor/share';
import { Clipboard } from '@capacitor/clipboard';

const url = 'https://ng-ionic-pwa.web.app';

export const share = async ({ toastController, message }: { toastController?: any, message?: string }) => {
  try {
    const canShare = await Share.canShare();
    if (canShare.value) {
      return Share.share({
        title: 'PWA with Angular and Ionic',
        text: message ?? 'Check out this Angular Ionic PWA!',
        url: url,
        dialogTitle: 'Share with buddies',
      }).catch(async (error) => {
        console.log('Share error:', error);
      });
    } else {
      await Clipboard.write({
        string: `Angular Ionic PWA\n${message}\n${url}`
      });
      const toast = await toastController.create({
        message: 'Copied to the clipboard',
        duration: 3000,
        position: 'top'
      });
      return toast.present();
    }
  } catch (error) {
    console.log('Share error:', error);
  }
}
