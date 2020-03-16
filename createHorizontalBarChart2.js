// selection: The dom element you wish to use
// props: An object consisting of properties to apply to the selection
function createHorizontalBarChart2(data, selection, props) {
    const { width, height, margin, xVal, yVal, yMin } = props;

    // general update pattern
    let svg = selection.selectAll('svg')
                         .data([null]);
    svg = svg.enter()
             .append('svg')
             .merge(svg)
                .attr('width', width)
                .attr('height', height);

    const { g, innerWidth, innerHeight } = marginConvention(svg, { width, height, margin });

    const yScale = d3.scaleBand()
                     .domain(data.map(d => d[yVal]))
                     .range([0, innerWidth])
                     .padding(0.1);

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d[xVal])]).nice()
                     .range([0, innerHeight])

    // general update pattern
    let rect = g.selectAll('rect')
                    .data(data);

    rect.enter()
        .append('rect')
        .merge(rect)
        .attr('class', d => "bar bar--" + ((d.direction === 'North' || d.direction === 'West') ?
                                           "north west" : "south east"))
        .style('fill', d => ((d.direction === 'North' || d.direction === 'West') ?
                                           "#386890" : "steelblue"))
            .attr('x', d => xScale(d[xVal]))
            .attr('height', yScale.bandwidth())
            .attr('y', d => yScale(d[yVal]))
            .attr('width', d => innerHeight - yScale(d[yVal]));  // KEY to right side up bars!!!!

    addTitle(svg, props);

    // y Axis
    labeledYAxis(g, Object.assign({}, props, {
        yScale,
        innerHeight
    }));

    // x Axis
    labeledXAxis(g, Object.assign({}, props, {
        xScale,
        innerHeight,
        innerWidth
    }));
}
