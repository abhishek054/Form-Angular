import { DatabaseComponent } from './database.component';
import { Injectable } from '@angular/core';
import { DataType } from '../dataType';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {


  // data : DataType[] = [];
  // name : string[] = []
  // titleArray : string[] = [];
  url : string = "http://localhost:51195/api/formdata";

  constructor(private http: HttpClient) {
    // this.data.push(
    //   { Bike:false,Car:true,Cycle:true,Truck:false,mail:"abhishek@gmail.com",mobile:"1234569512",title:"Abhishek",yearOfExperience:1, gen:"Male"   },
    //   {Bike : false, Car  : false, Cycle:false,Truck:true,mail:"wsdew@fdv.com", mobile: "9513697452",  title:"Aniket",yearOfExperience:  2, gen: "Male"},
    //   {Bike : true, Car  : false, Cycle:true,Truck:true,mail:"asfcw@sdcs.com", mobile: "8521578956",  title:"Aarushi",yearOfExperience:  6, gen: "Female"},
    //   {Bike : true, Car  : true, Cycle:false,Truck:false,mail:"anisha@ggk.com", mobile: "6548529517",  title:"Anisha",yearOfExperience:  0, gen: "Female"}
    // );
    // for(let d of this.data){
    //     this.name.push(d.title);
    // }



   }

  addData(data:any) : Observable<any> {
    // this.data.push(data);
    // this.name.push(data.title);
    // return null;
    return this.http.post(this.url, data);
  }

  getData() : Observable<any> {
    return this.http.get<any>(this.url);
  }



}
