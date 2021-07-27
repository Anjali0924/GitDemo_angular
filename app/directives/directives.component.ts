import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  employee:any[]=[
    {"name":"Anjali","age":"21","dept":"HR"},
    {"name":"Raj","age":"25","dept":"Admin"},
    {"name":"Janu","age":"20","dept":"Admin"},
    {"name":"Kinnari","age":"21","dept":"UI"},
    {"name":"Sayali","age":"22","dept":"UI"},
  ]

  ngOnInit(): void {
  }

}
