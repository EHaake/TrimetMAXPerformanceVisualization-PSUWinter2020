d3.csv('interstate.csv', formatter).then(data => {
    d3.csv('max_segment_stops.csv').then(segmentData => {

        let dwellTimePerLocation = aggregateAttributeOverCol(data, "location_id", "dwell");
        dwellTimePerLocation = mapLocationIdToStopName(dwellTimePerLocation, segmentData);
        dwellTimePerLocation = aggregateAttributeOverCol(dwellTimePerLocation, "stop_name", "dwell");
        console.log(dwellTimePerLocation);
        render(dwellTimePerLocation);
        window.addEventListener('resize', render(dwellTimePerLocation));

    });
});


function render(data) {
    const body = d3.select('body');
    createBarChart(data, body, Object.assign({}, myTheme,  {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        margin: { top: 100, bottom: 150, left: 150, right: 100 },
        xAxisLabel: 'Stop Name',
        yAxisLabel: 'Dwell Time (minutes)',
        xAxisTickFontSize: '12px',
        yAxisTickDensity: 50
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

    const xScale = d3.scaleBand()
                     .domain(data.map(d => d.stop_name))
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
        .attr('x', d => xScale(d.stop_name))
            .attr('width', xScale.bandwidth())
            .attr('y', d => yScale(d.dwell))
            .attr('height', d => innerHeight - yScale(d.dwell));  // KEY to right side up bars!!!!

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

function aggregateAttributeOverCol(data, attribute, col) {
    data = d3.nest()
             .key(d => d[attribute])
             .rollup(d => {
                 return d3.sum(d, function(g) {
                     return g[col];
                 }) / d.length;
             })
             .sortKeys(d3.ascending)
             .entries(data);

    data.forEach(d => {
        d[attribute] = d.key;
        delete d.key;
        d[col] = d.value;
        delete d.value;
    });

    return data;
}

function mapLocationIdToStopName(data, stopNameData) {
    data.forEach(d => {
        stopNameData.forEach(g => {
            if (d.location_id === g.stop_id) {
                d.stop_name = g.stop_name;
            }
        })
    });

    return data;
}

// format data read from csv file
// choose relevant columns and convert to number values
function formatter(row) {
    return {
        location_id: +row.location_id,
        dwell: +row.dwell,
    }
}
