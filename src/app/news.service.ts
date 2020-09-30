import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _HttpClient:HttpClient) { }
  getEgyptNews():Observable<any>{
    return this._HttpClient.get(environment.apiurl +"eg"+ environment.apiurlkey);
  }

  getUsaNews():Observable<any>{
    return this._HttpClient.get(environment.apiurl +"us" + environment.apiurlkey);
  }

  getTurkyNews():Observable<any>{
    return this._HttpClient.get(environment.apiurl +"tr" + environment.apiurlkey);
  }
}
