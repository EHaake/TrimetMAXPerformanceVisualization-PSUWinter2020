window.addEventListener('resize', render(dwellPerSegment));
render(dwellPerSegment);

function render(data) {
    const div = d3.select('#visualization');
    createBarChart(data, div, Object.assign({}, myTheme, {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        margin: { top: 100, bottom: 150, left: 150, right: 100 },
        xAxisLabel: 'MAX Segment',
        yAxisLabel: 'Dwell Time (minutes)',
        title: "Average Dwell Time Per MAX Segment",
        xVal: "segment",
        yVal: "dwell"
    }));
}

function averageAttribute(data, attribute) {
    data = d3.mean(data, d => d[attribute]);
    return data;
}

// format data read from csv file
// choose relevant columns and convert to number values
function formatter(row) {
    return {
        dwell: +row.dwell
    }
}
