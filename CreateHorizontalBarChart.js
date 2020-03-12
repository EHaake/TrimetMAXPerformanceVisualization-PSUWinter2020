function createHorizontalBarChart(data, selection, props) {
    const { width, height, margin, chartTitle, xAxisLabel, xVal, yVal } = props;

    var x = d3.scaleLinear()
              .range([0, width]);

    var y = d3.scaleBand()
              .range([0, height])
              .padding(0.2);

    var xAxis = d3.axisBottom(x)

    var yAxis = d3.axisLeft(y)
                  .tickSize(0)
                  .tickPadding(6);

    var svg = selection.append("svg")
                       .attr("width", width + margin.left + margin.right)
                       .attr("height", height + margin.top + margin.bottom)
                       .append("g")
                       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(d3.extent(data, d => d[xVal])).nice();
    y.domain(data.map(d => d[yVal]));

    svg.selectAll(".bar")
       .data(data)
       .enter().append("rect")
       .attr("class", d => "bar bar--" + (d[xVal] < 0 ? "negative" : "positive"))
       .attr("x", d => x(Math.min(0, d[xVal])))
       .attr("y", d => y(d[yVal]))
       .attr("width", d => Math.abs(x(d[xVal]) - x(0)))
       .attr("height", y.bandwidth());

    // Title
    svg.append('text')
       .attr('y', -30)
       .attr('x', 0)
       .attr('class', 'graph-title')
       .style('font-size', '40px')
       .text(chartTitle);

    svg.append("g")
       .attr("class", "x axis")
       .attr("transform", "translate(0," + height + ")")
       .call(xAxis);

    // X-Axis label
    svg.append('text')
       .attr('y', height + (height / 10))
       .attr('x', width / 2 - (width / 5))
       .attr('class', 'x-axis-label')
       .text(xAxisLabel);

    svg.append("g")
       .attr("class", "y axis")
       .attr("transform", "translate(" + x(0) + ",0)")
       .call(yAxis);
}
