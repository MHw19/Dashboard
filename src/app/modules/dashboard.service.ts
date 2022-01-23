import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 
 
  
  constructor() { }
  
  areaChart() {
  
    return [{
     name:'Asia',
     data:[524,455,754,654,457,654,784]
    },
    {
      name:'Europe',
      data:[535,455,754,610,457,555,684]
     },
     {
      name:'Africa',
      data:[524,410,730,460,457,754,684]
     },
     {
      name:'Ocenia',
      data:[450,655,554,654,557,454,784]
     },
     {
      name:'America',
      data:[424,355,754,554,557,754,784]
     }

    ]
  }


  cardDatas(){
   return [142,142,125,124,125];
  }


  pieChart() {
   return [
     {
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }
   ]
  }






}
