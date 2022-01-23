import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebaropened=true;

  constructor() { }

  ngOnInit(): void {
  }

  setSideNav(){
  this.sidebaropened= !this.sidebaropened;

  }


}
