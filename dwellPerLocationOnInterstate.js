// d3.csv('data/interstate.csv', formatter).then(data => {
//     d3.csv('data/max_segment_stops.csv').then(segmentData => {

//         let dwellTimePerLocation = aggregateAttributeOverCol(data, "location_id", "dwell");
//         dwellTimePerLocation = mapLocationIdToStopName(dwellTimePerLocation, segmentData);
//         dwellTimePerLocation = aggregateAttributeOverCol(dwellTimePerLocation, "stop_name", "dwell");
//         console.log(dwellTimePerLocation);
//         render(dwellTimePerLocation);
//         window.addEventListener('resize', render(dwellTimePerLocation));

//     });
// });

render(dwellPerStopInterstate);

function render(data) {
    const body = d3.select('body');
    createBarChart(data, body, Object.assign({}, myTheme, {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        xAxisLabel: 'Stop Name',
        yAxisLabel: 'Dwell Time (minutes)',
        xAxisTickFontSize: '12px',
        yAxisTickDensity: 50,
        title: "Dwell Per Stop On Insterstate",
        xVal: "stop_name",
        yVal: "dwell"
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
