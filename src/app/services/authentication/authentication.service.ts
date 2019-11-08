import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HelperService } from '../helper/helper.service';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token = null;

  constructor(
    private navCtrl: NavController,
    private helper: HelperService) { }

  registerUser(email, pwd) {
      firebase.auth().createUserWithEmailAndPassword(email, pwd)
        .then((res) => {
          console.log(res);
          if (res.user) {
            res.user.getIdToken().then((token) => {
              console.log(token);
              this.token = token;
              this.helper.presentAlert('Bem vindo ao App Basicão');
              this.navCtrl.navigateForward('/cadastro');
              return true;
            });
          }
        }).catch((error) => {
          console.log(error);
          this.helper.presentAlert(error.message);
        });
  }

  loginUser(email, pwd) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, pwd)
        .then((res) => {
          console.log(res);
          if (res.user) {
            res.user.getIdToken().then((token) => {
              console.log(token);
              this.token = token;
              this.helper.presentAlert('Bem vindo ao App Basicão');
              this.navCtrl.navigateForward('/cadastro');
              return true;
            });
          }
          resolve();
        }).catch((error) => {
          console.log(error);
          if (error.code === 'auth/user-not-found') {
            this.registerUser(email, pwd);
          } else {
            this.helper.presentAlert(error.message);
          }
          reject();
        });
    });
  }


  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
          .then(() => {
            console.log('LOG Out');
            this.helper.presentAlert('Usuário foi deslogado');
            resolve();
          }).catch((error) => {
            console.log(error);
            this.helper.presentAlert(error.message);
            reject();
          });
      }
    });
  }

  userDetails() {
    return firebase.auth().currentUser;
  }


}


