import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { DataType } from '../dataType';
import { DataBaseService } from '../database/data-base.service';
// import { MatAutocompleteModule } from '@angular/material/autocomplete'


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // myControl = new FormControl();
  // option :string[] = [];

  constructor(public _data : DataBaseService) { }

  ngOnInit() {
  }

  genders : string[] = ['Male', 'Female', 'Trans'];
  IHave : string[] = [
    'Cycle',
    'Bike',
    'Car',
    'Truck'
  ];

  data : DataType  = {
    title: null,
    mail: null,
    yearOfExperience: null,
    mobile: null,
    Bike: null,
    Car: null,
    Cycle: null,
    Truck: null,
    gen : null
  };

  onSubmit(form: NgForm){

    this.data.Bike = form.value.Bike == "" ? false : form.value.Bike;
    this.data.Car = form.value.Car  == "" ? false : form.value.Car;
    this.data.Cycle = form.value.Cycle  == "" ? false : form.value.Cycle;
    this.data.Truck = form.value.Truck  == "" ? false : form.value.Truck;
    this.data.yearOfExperience=form.value.yearOfExperience;
    this.data.mail=form.value.mail;
    this.data.title=form.value.title;
    this.data.gen=form.value.gen;
    this.data.mobile=form.value.mobile;
    this._data.addData([this.data]).subscribe(
      (result)=>{console.log(result);}
    );

    console.log(this.data);


  }

}
