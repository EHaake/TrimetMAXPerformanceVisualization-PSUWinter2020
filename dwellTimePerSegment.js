let dwellTimes = [
    { segment: "Banfield", dwell: 35.86452212439221},
    { segment: "Interstate", dwell: 29.13752671402992 },
    { segment: "Downtown", dwell: 33.725260499564946 }
];

window.addEventListener('resize', render(dwellTimes));
render(dwellTimes);

function render(data) {
    const body = d3.select('body');
    createBarChart(data, body, Object.assign({}, myTheme, {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        margin: { top: 100, bottom: 150, left: 150, right: 100 },
        xAxisLabel: 'MAX Segment',
        yAxisLabel: 'Dwell Time (minutes)',
        title: "Average Dwell Time Per MAX Segment"
    }));
}

// selection: The dom element you wish to use
// props: An object consisting of properties to apply to the selection
function createBarChart(data, selection, props) {
    const { width, height, margin } = props;

    // general update pattern
    let svg = selection.selectAll('svg')
                         .data([null]);
    svg = svg.enter()
             .append('svg')
             .merge(svg)
                .attr('width', width)
                .attr('height', height);
    const { g, innerWidth, innerHeight } = marginConvention(svg, { width, height, margin });
   
    // Add Graph Title
    svg.append("text")
       .attr("x", width / 2)
       .attr("y", 40)
       .attr("dy", "1em")
       .attr('font-family', props.titleFontFamily)
       .attr('fill', props.titleFontFill)
       .style("text-anchor", "middle")
       .style("font-size", props.titleFontSize)
       .text(props.title);

    const xScale = d3.scaleBand()
                     .domain(data.map(d => d.segment))
                     .range([0, innerWidth])
                     .padding(0.1);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d.dwell) + 5]).nice()
                     .range([innerHeight, 0]);

    // general update pattern
    let rect = g.selectAll('rect')
                    .data(data);

    rect.enter()
        .append('rect')
        .merge(rect)
        .attr('x', d => xScale(d.segment))
            .attr('width', xScale.bandwidth())
            .attr('y', d => yScale(d.dwell))
            .attr('height', d => innerHeight - yScale(d.dwell));  // KEY to right side up bars!!!!

    // y Axis
    labeledYAxis(g, Object.assign({}, props, {
        yScale,
        innerHeight,
    }));

    // x Axis
    labeledXAxis(g, Object.assign({}, props, {
        xScale,
        innerHeight,
        innerWidth
    }));
}

function averageAttribute(data, attribute) {

    data = d3.mean(data, d => d[attribute]);

    console.log(data);
    return data;
}

// format data read from csv file
// choose relevant columns and convert to number values
function formatter(row) {
    return {
        dwell: +row.dwell
    }
}
