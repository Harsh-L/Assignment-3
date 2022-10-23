import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-in-list',
  templateUrl: './array-in-list.component.html',
  styleUrls: ['./array-in-list.component.css']
})
export class ArrayInListComponent implements OnInit {

  constructor() { }
  array_data : number[] = [1,2,3,4,5,6,7,8,9,10];
  ngOnInit(): void {
  }

}
