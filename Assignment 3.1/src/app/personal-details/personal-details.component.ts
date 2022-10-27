import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor() { }
  display: Boolean = false;
  name: string = '';
  bdate: Date = new Date();
  address: string = '';
  contactno: Number|null = null;
  email: string = '';
  
  displayData(data: any){   
    this.name = data.name;
    this.bdate = data.bdate;
    this.address = data.address;
    this.contactno = data.contactno;
    this.email = data.email;
    this.display = true;
  }

  ngOnInit(): void {

  }

}
