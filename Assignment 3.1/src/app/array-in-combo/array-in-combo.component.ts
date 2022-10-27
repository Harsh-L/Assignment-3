import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-in-combo',
  templateUrl: './array-in-combo.component.html',
  styleUrls: ['./array-in-combo.component.css']
})
export class ArrayInComboComponent implements OnInit {

  constructor() { }
  array_data : number[] = [1,2,3,4,5,6,7,8,9,10];
  ngOnInit(): void {
  }

}
