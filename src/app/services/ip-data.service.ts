import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IpDataService {

  url = "http://ipwho.is/";
  constructor(private http:HttpClient) { }

  data()
  {
    return this.http.get(this.url);
  }
}
