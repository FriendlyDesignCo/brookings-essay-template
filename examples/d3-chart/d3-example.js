  //Width and height
  var w = 600;
  var h = 350;
  var url;
  var jobtext = window.jobtext;

  //Define map projection
  var projection = d3.geo.albersUsa()
      .translate([w / 2, (h / 2)])
      .scale([690]);

  //Define path generator
  var path = d3.geo.path()
      .projection(projection);

  //Create SVG element
  var svg = d3.select("#map")
      .append("svg")
      .attr("width", w)
      .attr("height", h);


  //Load in GeoJSON data
  //d3.json("/~/media/multimedia/interactives/2013/job_sprawl/usstates.json", function(json) {
  d3.json("examples/d3-chart/usstates.json", function (json) {

      svg.selectAll("path")
          .data(json.features)
          .enter()
          .append("path")
          .attr("d", path)
          .style("fill", "#eee")
          .style("stroke", "#ccc");

      //Load in cities data
      //  d3.csv("/~/media/multimedia/interactives/2013/job_sprawl/sprawl3.csv", function(data) {
      d3.csv("examples/d3-chart/FDI_update.csv", function (data) {

          var foreignshare = svg.selectAll("circle.foreignshare")
              .data(data)
              .enter()

          .append("circle")
              .sort(function (a, b) {
                  return d3.descending(parseFloat(a.foreignshare), parseFloat(b.foreignshare))
              })

          .attr("cx", function (d) {
              return projection([d.lon, d.lat])[0];
          })
              .attr("cy", function (d) {
                  return projection([d.lon, d.lat])[1];
              })
              .attr("r", function (d) {
                  //return parseInt(Math.sqrt(parseFloat(d.foreignshare)/Math.PI) * 2.5);
                  //return parseInt(Math.sqrt(parseFloat(d.foreignshare)/Math.PI) * 6);
                  return parseInt(d.foreignshare);
              })
              .attr("id", function (d) {
                  return d.MetroArea
              })
          // .style("fill", "#015376")
          .style("fill", "#015376")

          .style("opacity", 0.4)
              .attr("class", "foreignshare")
              .text(function (d) {
                  return (d.foreignshare)
              })

          .on("mouseover", function (d) {
              d3.select(this)
                  .style("fill", "#c60")
              //Get this bar's x/y values, then augment for the tooltip
              var xPosition = parseFloat(d3.select(this).attr("cx")) + 50;
              var yPosition = parseFloat(d3.select(this).attr("cy"));
              var jobtext = String(d3.select(this).text());

              //Update the tooltip position and value
              d3.select("#tooltip")

              .style("left", xPosition + "px")
                  .style("top", yPosition + "px")
                  .select("#metroarea")
                  .text(d.MetroArea);
              d3.select("#jobs")
                  .text(function (d) {
                      return jobtext
                  })

              //Show the tooltip
              d3.select("#tooltip").classed("hidden", false);
          })
    
    
    //from prior version where dots linked to PDFs

       /*   .on("click", function (d) {
              var url2 = d.artlink;
              //window.location.href = url2;
              window.open(url2);


          })
*/
          .on("mouseout", function () {
              d3.select(this)
                  .style("fill", "#015376")
             //Hide the tooltip
              d3.select("#tooltip").classed("hidden", true);

          });

      });

      // scale

      var keyholder = d3.select("svg")
          .append("g")
          .attr("width", 100)
          .attr("height", 100)
          //.attr("x",400)
          //.attr("y", 200);
          .attr("transform", "translate(490,160)")
    
    d3.select("#map")
          .append("div")
		  .style('position', 'absolute')
          .style("width", '120px')
          .style("height", '100px')
  .style("top", '160px')
  .style("right", '0')
    //.html('Share of Metro Area Employment in Foreign-Owned Establishments');
    .html('Share of Metro Area Employment in FOEs');

      var dataset = [1.5, 5, 10, 15];

      var key = d3.scale.threshold()
          .domain(0, 50)
          .range(5);

      var circles = keyholder.selectAll("circle")
          .data(dataset)
          .enter()
          .append("circle");

      circles.attr("cx", 50)
          .attr("cy", function (d, i) {
              return (50 + (i * 30))
          })
          .attr("r", function (d) {
              return d
          })
          .style("fill", "#015376")
          .style("opacity", 0.4);

      keyholder.selectAll("text")
          .data(dataset)
          .enter()
          .append("text")
          .text(function (d) {
              return d + "%";
          })
          .attr("x", 70)
          .attr("y", function (d, i) {
              return (58 + (i * 30))
          });

    });
