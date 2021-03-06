// selection: The dom element you wish to use
// props: An object consisting of properties to apply to the selection
function createSubSegmentBarChart(data, selection, props) {
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

    const xScale = d3.scaleBand()
                     .domain(data.map(d => d[xVal]))
                     .range([0, innerWidth])
                     .padding(0.1);

    const yScale = d3.scaleLinear()
                     .domain([yMin, 0.09])
                     .range([innerHeight, 0]);

    // general update pattern
    let rect = g.selectAll('rect')
                    .data(data);

    rect.enter()
        .append('rect')
        .merge(rect)
        // .attr('class', d => "bar bar--" + ((d.direction === 'North' || d.direction === 'West') ?
        //                                    "north west" : "south east"))
        // .style('fill', d => ((d.direction === 'North' || d.direction === 'West') ?
        //                                    "#386890" : "steelblue"))
        .style('fill', d => {
            if (d.segment.includes("Ban")) return "#588ebb";
            if (d.segment.includes("Inter")) return "#376890";
            if (d.segment.includes("Down")) return "#23415a";
        })
            .attr('x', d => xScale(d[xVal]))
            .attr('width', xScale.bandwidth())
            .attr('y', d => yScale(d[yVal]))
            .attr('height', d => innerHeight - yScale(d[yVal]));  // KEY to right side up bars!!!!

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
