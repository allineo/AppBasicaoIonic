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

  email = this.getEmail();

  getEmail() {
    var email = this.appcomponents.getUrlParameter("email");
    console.log(email);
    return email;
  }

  sendForm() {
    var contact = document.getElementById("contactField")["value"];
    var message = document.getElementById("messageField")["value"];

    let url = this.appcomponents.apiUrl + "/saveForm";
    var data = {contact: contact,
                message: message}
    this.http.post(url, data)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error.message);
      });
  }
}


