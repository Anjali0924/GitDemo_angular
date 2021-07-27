import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {

  //declaring variable
  //whaterver variable name youbuser here make sure you use that in Interpolation

  name:string="Sri";
  age:number;
  hobbies:string[];
  marks:Array<number>;
  Istrue:boolean;
  tuplevel:[string,number,boolean];
  dynamicvalue:any;
  student:object;
  picture="assets/images/ball1.jpg"


  constructor() {

    this.age=30;
    this.hobbies=["Playing","Singing"];
    this.marks=[90,78,90];
    this.Istrue=false;
    this.tuplevel=["Pune",1200,true];
    this.dynamicvalue=90;
    this.student={fathername:"Raj",Address:"TNB Chennai"}
   }

  ngOnInit(): void {
  }

}
