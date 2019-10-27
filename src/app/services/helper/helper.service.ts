import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  apiUrl = 'https://appbasicao.herokuapp.com';

  public getUrlParameter(urlParameterName) {
    // tslint:disable-next-line: no-conditional-assignment
    if (urlParameterName = (new RegExp('[?&]' +
      encodeURIComponent(urlParameterName) + '=([^&]*)'))
      .exec(location.search)) {
      return decodeURIComponent(urlParameterName[1]);
    }
  }
}
