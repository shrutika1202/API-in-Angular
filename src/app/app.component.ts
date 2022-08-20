import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IpDataService } from './services/ip-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAPI';
  info:any;
  constructor(private ipData:IpDataService)
  {
    ipData.data().subscribe((data)=>{
      console.log(data);
      this.info=data;
    });
    // console.warn(this.info);
  }


  // constructor(private http : HttpClient){}
  // click = () =>{
  //   this.http.get("https://randomuser.me/api")
  //   .subscribe(data => {
  //     console.log(data);
  //   })
  // }
}
