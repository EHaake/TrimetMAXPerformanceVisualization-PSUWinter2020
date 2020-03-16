window.addEventListener('resize', render(dwellPerSegment));
render(dwellPerSegment);

function render(data) {
    const div = d3.select('#visualization');
    createBarChart(data, div, Object.assign({}, myTheme, {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        titleFontSize: '40px',
        xAxisLabel: 'MAX Segment',
        yAxisLabel: 'Dwell Time (minutes)',
        xAxisTickFontSize: '30px',
        xAxisTickFontFill: 'white',
        yAxisTickDensity: 50,
        xAxisLabelOffset: 40,
        title: "Average Dwell Time Per MAX Segment",
        xVal: "segment",
        yVal: "dwell"
    }));
}

// format data read from csv file
// choose relevant columns and convert to number values
function formatter(row) {
    return {
        dwell: +row.dwell
    }
}
