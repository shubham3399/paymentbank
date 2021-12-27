import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
@Component({
  selector: 'app-amchart',
  templateUrl: './amchart.component.html',
  styleUrls: ['./amchart.component.css']
})
export class AmchartComponent implements OnInit {
  @Input() value2: any;
  ngAfterViewInit() {
    console.log(this.value2);
    let root = am5.Root.new("chartdiv");
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);

    let colorSet = am5.ColorSet.new(root, {});
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
        value: this.value2,
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
    let xRenderer = am5xy.AxisRendererX.new(root, {});
    xRenderer.grid.template.set("location", 0.5);
    xRenderer.labels.template.setAll({
      location: 0.5,
      multiLocation: 0.5
    });

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxPrecision: 0,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));

    let series = chart.series.push(am5xy.LineSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "year",
      tooltip: am5.Tooltip.new(root, {
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


    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          templateField: "bulletSettings",
          radius: 5
        })
      });
    });

    series.data.setAll(data);
    series.appear(1000);
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal",
      marginBottom: 20

    }));
    chart.appear(1000, 100);

  }
  ngOnInit(): void {
  }


}
