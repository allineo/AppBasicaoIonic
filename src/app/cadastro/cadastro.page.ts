import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  email = this.getEmail();

  constructor(public appcomponents: AppComponent, public http: HttpClient) { }

  ngOnInit() {
  }

  getEmail() {
    const email = this.appcomponents.getUrlParameter('email');
    console.log(email);
    return email;
  }

  sendForm() {
    const contact = document.getElementById('contactField')['value'];
    const message = document.getElementById('messageField')['value'];

    const url = this.appcomponents.apiUrl + '/saveForm';
    const dataIn = {
      contact,
      message
    };
    this.http.post(url, dataIn)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error.message);
      });
  }
}


