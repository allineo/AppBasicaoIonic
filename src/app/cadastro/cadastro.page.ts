import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public appcomponents: AppComponent, public http: HttpClient) { }

  ngOnInit() {
  }

  email = this.teste();

  teste() {
    var email = this.appcomponents.getUrlParameter("email");
    console.log(email);
    return email;
  }

  sendForm() {
    let url = this.appcomponents.apiUrl + "/saveForm" +
      "?contact=" + this.email;
     // "&message=" + message;
      
    this.http.post(url, {})
      .subscribe(data => {
        console.log('my data: ', data);
      }, error => {
        console.log(error);
      });
  }
}


