import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
@Component({
  selector: 'app-amchart',
  templateUrl: './amchart.component.html',
  styleUrls: ['./amchart.component.css']
})
export class AmchartComponent implements OnChanges {
  @Input() value2: any;
  
  public root = am5.Root.new("chartdiv");

  submit(value2: SimpleChanges) {
    console.log(typeof (value2));
    this.root.setThemes([
      am5themes_Animated.new(this.root)
    ]);
    let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: this.root.verticalLayout
    }));
    let cursor = chart.set("cursor", am5xy.XYCursor.new(this.root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);

    let colorSet = am5.ColorSet.new(this.root, {});
    let data = [
      {
        year: "NOV'21",
        value: 580,
        strokeSettings: {
          stroke: colorSet.getIndex(0)
        },
        fillSettings: {
          fill: colorSet.getIndex(15),
        },
        bulletSettings: {
          fill: colorSet.getIndex(13)
        }
      },
      {
        year: "DEC'21",
        value: 565,
        bulletSettings: {
          fill: colorSet.getIndex(13)
        },
        fillSettings: {
          fill: colorSet.getIndex(6),
        },
        strokeSettings: {
          stroke: colorSet.getIndex(9)
        },
      },

      {
        year: "JAN'21",
        value: 550,
        strokeSettings: {
          stroke: colorSet.getIndex(12)
        },
        fillSettings: {
          fill: colorSet.getIndex(8),
        },
        bulletSettings: {
          fill: colorSet.getIndex(13)
        }
      },

      {
        year: "FEB'21",
        value: value2.currentValue,
        bulletSettings: {
          fill: colorSet.getIndex(12)
        },
        fillSettings: {
          fill: colorSet.getIndex(6),
        }
      },
      {
        year: "MAR'21"
      },
      {
        year: "APR' 21"
      }
    ];
    let xRenderer = am5xy.AxisRendererX.new(this.root, {});
    xRenderer.grid.template.set("location", 0.5);
    xRenderer.labels.template.setAll({
      location: 0.5,
      multiLocation: 0.5
    });

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "year",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(this.root, {})
    }));

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      maxPrecision: 0,
      renderer: am5xy.AxisRendererY.new(this.root, {})
    }));

    let series = chart.series.push(am5xy.LineSeries.new(this.root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "year",
      tooltip: am5.Tooltip.new(this.root, {
        labelText: "{valueY}",
        dy: -5
      })
    }));

    series.strokes.template.setAll({
      templateField: "strokeSettings",
      strokeWidth: 3
    });

    series.fills.template.setAll({
      visible: true,
      fillOpacity: 0.2,
      templateField: "fillSettings"
    });


    series.bullets.push(() => {
      return am5.Bullet.new(this.root, {
        sprite: am5.Circle.new(this.root, {
          templateField: "bulletSettings",
          radius: 5
        })
      });
    });

    series.data.setAll(data);
    series.appear(1000);
    chart.set("scrollbarX", am5.Scrollbar.new(this.root, {
      orientation: "horizontal",
      marginBottom: 20

    }));
    chart.appear(1000, 100);
    this.root = this.root;
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
    this.submit(changes);
  }
  ngOnInit(): void {

  }


}

