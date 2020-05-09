import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {


  public scatterChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public scatterChartType = 'scatter';

  public scatterChartData = [
    {data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3},
      ], label: 'Series A', pointRadius: 10},
  ];
  donnees: any;

  constructor() { }

  ngOnInit(): void {
    console.log("bonjourrr");
  }

}
