import { Component, OnInit, DoCheck } from '@angular/core';
import { DataBaseService } from './data-base.service';
import { DataType } from '../dataType';
// import { Response } from '@angular/http'

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit , DoCheck {

  data : DataType[] = [];
  constructor ( public _data : DataBaseService ) {}

  ngDoCheck(){

  }

  ngOnInit() {
    this._data.getData().subscribe(

      (response) => {
        this.data = response;
        console.log(response);
        // console.log("Hello")
      },
      // ()=>{
      //   console.log("next");
      // },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  }

  // Reload(){
  //   this._data.getData().subscribe(
  //     (data) => {
  //       this.data = data;
  //       console.log("Next");
  //     }
  //   );
  // }

}
