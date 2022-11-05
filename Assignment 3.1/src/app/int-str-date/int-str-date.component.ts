import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-int-str-date',
  templateUrl: './int-str-date.component.html',
  styleUrls: ['./int-str-date.component.css']
})
export class IntStrDateComponent implements OnInit {

  constructor() { }
  integer_data: Number = 10;
  string_data: String = 'Hello World';
  date_data: Date = new Date();
  ngOnInit(): void {
  }

}
