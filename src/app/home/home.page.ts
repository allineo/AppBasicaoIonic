import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HelperService } from '../services/helper/helper.service';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email = null;
  password = null;

  constructor(
    private helper: HelperService,
    private authentication: AuthenticationService) { }

  validLogin(f: NgForm) {
    if (f.valid) {
      this.authentication.loginUser(this.email, this.password);
    } else {
      this.helper.presentAlert('Favor inserir o E-mail e a Senha');
    }
  }
}
