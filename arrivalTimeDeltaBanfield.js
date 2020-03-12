render(arrivalDeltaPerStopBanfieldWithDirection);

function render(data) {
  const div = d3.select('#visualization');
  var margin = {top: 100, right: 100, bottom: 100, left: 100},
      width = 960,
      height = 500;

  var x = d3.scaleLinear()
            .range([0, width]);

  var y = d3.scaleBand()
            .range([0, height])
            .padding(0.2);

  var xAxis = d3.axisBottom(x)

  var yAxis = d3.axisLeft(y)
                .tickSize(0)
                .tickPadding(6);

  var svg = div.append("svg")
               .attr("width", width + margin.left + margin.right)
               .attr("height", height + margin.top + margin.bottom)
               .append("g")
               .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  x.domain(d3.extent(data, function(d) { return d.arrival_delta; })).nice();
  y.domain(data.map(function(d) { return d.stop_name; }));

  svg.selectAll(".bar")
     .data(data)
     .enter().append("rect")
     .attr("class", d => "bar bar--" + (d.arrival_delta < 0 ? "negative" : "positive"))
     .attr("x", d => x(Math.min(0, d.arrival_delta)))
     .attr("y", d => y(d.stop_name))
     .attr("width", d => Math.abs(x(d.arrival_delta) - x(0)))
     .attr("height", y.bandwidth());

  // Title
  svg.append('text')
     .attr('y', -30)
     .attr('x', width / 4)
     .attr('class', 'graph-title')
     .text('Average Arrival Delta (Banfield)');

  svg.append("g")
     .attr("class", "x axis")
     .attr("transform", "translate(0," + height + ")")
     .call(xAxis);

  // X-Axis label
  svg.append('text')
     .attr('y', height + (height / 8))
     .attr('x', width / 2 - (width / 10))
     .attr('class', 'x-axis-label')
     .text('Seconds Late');

  svg.append("g")
     .attr("class", "y axis")
     .attr("transform", "translate(" + x(0) + ",0)")
     .call(yAxis);
}
