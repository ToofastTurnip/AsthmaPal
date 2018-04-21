import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { HttpClientModule} from '@angular/common/http'; <= no ned

@Injectable()
export class LoginProvider {
  url: string;

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
    this.url = "http://www.mocky.io/v2/5ac196232f0000610096124f";
  }

  doLogin(email, password): Observable<any>{
    return this.http.get(this.url);
  }
}