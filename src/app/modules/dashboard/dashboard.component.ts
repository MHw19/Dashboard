import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


   areaChart=[];
   cardData=[];
   pieChartData=[];
  constructor(private dashboardservice:DashboardService) { }

  ngOnInit(): void {
    this.areaChart=this.dashboardservice.areaChart();
    this.cardData=this.dashboardservice.cardDatas();
    this.pieChartData=this.dashboardservice.pieChart();

  }

}
