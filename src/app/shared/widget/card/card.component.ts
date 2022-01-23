import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widgetcard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() lable:string;
  @Input() total:string;
  @Input() percentage:string;

  @Input() data=[];
  




  chartOptions={};
  Highcharts=Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions={
      chart: {
        type: 'area',
        backgroundcolor:false,
        borderwidth:2,
        margin:[2,2,2,2],
        hight:60
      },
  
      title: {
        text: null
      },
      subtitle: {
        text:null
      },
      exporting:{
      enabled:false

      },
      tooltip:{
      split:true,
      outside:false

      },
      credits:{
        enabled:false
 
      },
      legend:{
      enabled:false
      },
      xAxis: {
       
        labels: {
          enabled:false
          
        },
        title : {
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      yAxis: {
       
        labels: {
          enabled:false
          
        },
        title : {
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOption:[]
      },



      series: [{
      
        data:this.data
      }]
  



  };


 setTimeout(()=>{
  
  window.dispatchEvent(
  new Event('resize')

  );

 }, 300);






  }

}
