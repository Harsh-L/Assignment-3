import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box-area',
  templateUrl: './text-box-area.component.html',
  styleUrls: ['./text-box-area.component.css']
})
export class TextBoxAreaComponent implements OnInit {

  isTextbox: boolean = true;
  showInput(event: any){
    let selected_input = event.target.value;
    if( selected_input == "textbox"){
      this.isTextbox = true;
    }else{
      this.isTextbox = false;
    }
  }

  constructor() { }
  
  ngOnInit(): void {
  }

}
