	
			/* Stacked Simple */
	
      var stackedChart;

      var stackedChartData = [
          {
              "year": 1995,
              "cars": 1567,
              "motorcycles": 683,
              "bicycles": 146
          },
          {
              "year": 1996,
              "cars": 1617,
              "motorcycles": 691,
              "bicycles": 138
          },
          {
              "year": 1997,
              "cars": 1630,
              "motorcycles": 642,
              "bicycles": 127
          },
          {
              "year": 1998,
              "cars": 1660,
              "motorcycles": 699,
              "bicycles": 105
          },
          {
              "year": 1999,
              "cars": 1683,
              "motorcycles": 721,
              "bicycles": 109
          },
          {
              "year": 2000,
              "cars": 1691,
              "motorcycles": 737,
              "bicycles": 112
          },
          {
              "year": 2001,
              "cars": 1298,
              "motorcycles": 680,
              "bicycles": 101
          },
          {
              "year": 2002,
              "cars": 1275,
              "motorcycles": 664,
              "bicycles": 97
          },
          {
              "year": 2003,
              "cars": 1246,
              "motorcycles": 648,
              "bicycles": 93
          },
          {
              "year": 2004,
              "cars": 1218,
              "motorcycles": 637,
              "bicycles": 101
          },
          {
              "year": 2005,
              "cars": 1213,
              "motorcycles": 633,
              "bicycles": 87
          },
          {
              "year": 2006,
              "cars": 1199,
              "motorcycles": 621,
              "bicycles": 79
          },
          {
              "year": 2007,
              "cars": 1110,
              "motorcycles": 210,
              "bicycles": 81
          },
          {
              "year": 2008,
              "cars": 1165,
              "motorcycles": 232,
              "bicycles": 75
          },
          {
              "year": 2009,
              "cars": 1145,
              "motorcycles": 219,
              "bicycles": 88
          },
          {
              "year": 2010,
              "cars": 1163,
              "motorcycles": 201,
              "bicycles": 82
          },
          {
              "year": 2011,
              "cars": 1180,
              "motorcycles": 285,
              "bicycles": 87
          },
          {
              "year": 2012,
              "cars": 1159,
              "motorcycles": 277,
              "bicycles": 71
          }
      ];

      AmCharts.ready(function () {
          // SERIAL CHART
          stackedChart = new AmCharts.AmSerialChart();
          stackedChart.pathToImages = "javascripts/vendor/amcharts_3.9.0.free/amcharts/images/";
          stackedChart.dataProvider = stackedChartData;
          stackedChart.marginTop = 10;
          stackedChart.categoryField = "year";

          // AXES
          // Category
          var categoryAxis = stackedChart.categoryAxis;
          categoryAxis.gridAlpha = 0.07;
          categoryAxis.axisColor = "#DADADA";
          categoryAxis.startOnAxis = true;

          // Value
          var valueAxis = new AmCharts.ValueAxis();
          valueAxis.stackType = "regular"; // this line makes the chart "stacked"
          valueAxis.gridAlpha = 0.07;
          valueAxis.title = "Traffic incidents";
          stackedChart.addValueAxis(valueAxis);

          // GUIDES are vertical (can also be horizontal) lines (or areas) marking some event.
          // first guide
          var guide1 = new AmCharts.Guide();
          guide1.category = "2001";
          guide1.lineColor = "#CC0000";
          guide1.lineAlpha = 1;
          guide1.dashLength = 2;
          guide1.inside = true;
          guide1.labelRotation = 90;
          guide1.label = "fines for speeding increased";
          categoryAxis.addGuide(guide1);

          // second guide
          var guide2 = new AmCharts.Guide();
          guide2.category = "2007";
          guide2.lineColor = "#CC0000";
          guide2.lineAlpha = 1;
          guide2.dashLength = 2;
          guide2.inside = true;
          guide2.labelRotation = 90;
          guide2.label = "motorcycle maintenance fee introduced";
          categoryAxis.addGuide(guide2);


          // GRAPHS
          // first graph
          var graph = new AmCharts.AmGraph();
          graph.type = "line"; // it's simple line graph
          graph.title = "Cars";
          graph.valueField = "cars";
          graph.lineAlpha = 0;
          graph.fillAlphas = 0.6; // setting fillAlphas to > 0 value makes it area graph
          graph.balloonText = "<img src='examples/amcharts/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>";
          graph.hidden = true;
          stackedChart.addGraph(graph);

          // second graph
          graph = new AmCharts.AmGraph();
          graph.type = "line";
          graph.title = "Motorcycles";
          graph.valueField = "motorcycles";
          graph.lineAlpha = 0;
          graph.fillAlphas = 0.6;
          graph.balloonText = "<img src='examples/amcharts/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>";
          stackedChart.addGraph(graph);

          // third graph
          graph = new AmCharts.AmGraph();
          graph.type = "line";
          graph.title = "Bicycles";
          graph.valueField = "bicycles";
          graph.lineAlpha = 0;
          graph.fillAlphas = 0.6;
          graph.balloonText = "<img src='examples/amcharts/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>";
          stackedChart.addGraph(graph);

          // LEGEND
          var legend = new AmCharts.AmLegend();
          legend.position = "top";
          legend.valueText = "[[value]]";
          legend.valueWidth = 100;
          legend.valueAlign = "left";
          legend.equalWidths = false;
          legend.periodValueText = "total: [[value.sum]]"; // this is displayed when mouse is not over the stackedChart.
          stackedChart.addLegend(legend);

          // CURSOR
          var chartCursor = new AmCharts.ChartCursor();
          chartCursor.cursorAlpha = 0;
          stackedChart.addChartCursor(chartCursor);

          // SCROLLBAR
          var chartScrollbar = new AmCharts.ChartScrollbar();
          chartScrollbar.color = "#FFFFFF";
          stackedChart.addChartScrollbar(chartScrollbar);

          // WRITE
          stackedChart.write("amcharts-area-stacked");
      });




				/* Column Simple */
				
        var columnChart;

        var columnChartData = [
            {
                "country": "USA",
                "visits": 4025
            },
            {
                "country": "China",
                "visits": 1882
            },
            {
                "country": "Japan",
                "visits": 1809
            },
            {
                "country": "Germany",
                "visits": 1322
            },
            {
                "country": "UK",
                "visits": 1122
            },
            {
                "country": "France",
                "visits": 1114
            },
            {
                "country": "India",
                "visits": 984
            },
            {
                "country": "Spain",
                "visits": 711
            },
            {
                "country": "Netherlands",
                "visits": 665
            },
            {
                "country": "Russia",
                "visits": 580
            },
            {
                "country": "South Korea",
                "visits": 443
            },
            {
                "country": "Canada",
                "visits": 441
            },
            {
                "country": "Brazil",
                "visits": 395
            },
            {
                "country": "Italy",
                "visits": 386
            },
            {
                "country": "Australia",
                "visits": 384
            },
            {
                "country": "Taiwan",
                "visits": 338
            },
            {
                "country": "Poland",
                "visits": 328
            }
        ];


        AmCharts.ready(function () {
            // SERIAL CHART
            columnChart = new AmCharts.AmSerialChart();
            columnChart.dataProvider = columnChartData;
            columnChart.categoryField = "country";
            columnChart.startDuration = 1;

            // AXES
            // category
            var categoryAxis = columnChart.categoryAxis;
            categoryAxis.labelRotation = 90;
            categoryAxis.gridPosition = "start";

            // value
            // in case you don't want to change default settings of value axis,
            // you don't need to create it, as one value axis is created automatically.

            // GRAPH
            var graph = new AmCharts.AmGraph();
            graph.valueField = "visits";
            graph.balloonText = "[[category]]: <b>[[value]]</b>";
            graph.type = "column";
            graph.lineAlpha = 0;
            graph.fillAlphas = 0.8;
            columnChart.addGraph(graph);

            // CURSOR
            var chartCursor = new AmCharts.ChartCursor();
            chartCursor.cursorAlpha = 0;
            chartCursor.zoomable = false;
            chartCursor.categoryBalloonEnabled = false;
            columnChart.addChartCursor(chartCursor);

            columnChart.creditsPosition = "top-right";

            columnChart.write("amcharts-column-simple");
        });





            var pieChart;
            var legend;

            var pieChartData = [{
                country: "Czech Republic",
                litres: 301.90
            }, {
                country: "Ireland",
                litres: 201.10
            }, {
                country: "Germany",
                litres: 165.80
            }, {
                country: "Australia",
                litres: 139.90
            }, {
                country: "Austria",
                litres: 128.30
            }, {
                country: "UK",
                litres: 99.00
            }, {
                country: "Belgium",
                litres: 60.00
            }];

            AmCharts.ready(function () {
                // PIE CHART
                pieChart = new AmCharts.AmPieChart();
                pieChart.dataProvider = pieChartData;
                pieChart.titleField = "country";
                pieChart.valueField = "litres";
                pieChart.outlineColor = "#FFFFFF";
                pieChart.outlineAlpha = 0.8;
                pieChart.outlineThickness = 2;

                // WRITE
                pieChart.write("amcharts-pie-simple");
            });






            var xyChart;

            var xyChartData = [
                {
                    "x": 10,
                    "y": 14,
                    "value": 59
                },
                {
                    "x": 5,
                    "y": 3,
                    "value": 50
                },
                {
                    "x": -10,
                    "y": -3,
                    "value": 19
                },
                {
                    "x": -6,
                    "y": 5,
                    "value": 65
                },
                {
                    "x": 15,
                    "y": -4,
                    "value": 92
                },
                {
                    "x": 13,
                    "y": 1,
                    "value": 8
                },
                {
                    "x": 1,
                    "y": 6,
                    "value": 35
                }
            ];

            AmCharts.ready(function () {
                // XY Chart
                xyChart = new AmCharts.AmXYChart();
                xyChart.pathToImages = "javascripts/vendor/amcharts_3.9.0.free/amcharts/images/";
                xyChart.dataProvider = xyChartData;
                xyChart.startDuration = 1.5;

                // AXES
                // X
                var xAxis = new AmCharts.ValueAxis();
                xAxis.title = "X Axis";
                xAxis.position = "bottom";
                xAxis.autoGridCount = true;
                xyChart.addValueAxis(xAxis);

                // Y
                var yAxis = new AmCharts.ValueAxis();
                yAxis.title = "Y Axis";
                yAxis.position = "left";
                yAxis.autoGridCount = true;
                xyChart.addValueAxis(yAxis);

                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.valueField = "value"; // valueField responsible for the size of a bullet
                graph.xField = "x";
                graph.yField = "y";
                graph.lineAlpha = 0;
                graph.bullet = "bubble";
                graph.balloonText = "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>"
                xyChart.addGraph(graph);

                // WRITE                                
                xyChart.write("amcharts-xy-simple");
            });
