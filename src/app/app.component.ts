import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Cadastro',
      url: '/cadastro',
      icon: 'clipboard'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];


  apiUrl = 'https://appbasicao.herokuapp.com';

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public getUrlParameter(urlParameterName) {
    if (urlParameterName = (new RegExp('[?&]' +
      encodeURIComponent(urlParameterName) + '=([^&]*)'))
      .exec(location.search)) {
      return decodeURIComponent(urlParameterName[1]);
    }
  }

}
