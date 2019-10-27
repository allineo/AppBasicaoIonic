import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HelperService } from '../services/helper/helper.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public helper: HelperService,
              public http: HttpClient) { }

  email = this.getEmail();
  contactField: null;
  messageField: null;

  ngOnInit() {
  }

  getEmail() {
    const email = this.helper.getUrlParameter('email');
    console.log(email);
    return email;
  }

  sendForm(f: NgForm) {
    const url = this.helper.apiUrl + '/saveForm';
    const dataIn = {
      contact: this.contactField,
      message: this.messageField
    };
    this.http.post(url, dataIn)
      .subscribe(dataOut => {
        console.log(dataOut);
      }, error => {
        console.log(error.message);
      });
  }
}
