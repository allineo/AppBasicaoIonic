import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private alertController: AlertController) { }

  getUrlParameter(urlParameterName) {
    // tslint:disable-next-line: no-conditional-assignment
    if (urlParameterName = (new RegExp('[?&]' +
      encodeURIComponent(urlParameterName) + '=([^&]*)'))
      .exec(location.search)) {
      return decodeURIComponent(urlParameterName[1]);
    }
  }


  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
