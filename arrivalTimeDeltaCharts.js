// renderInterstate(arrivalDeltaPerStopInterstateWithDirection);
// renderBanfield(arrivalDeltaPerStopBanfieldWithDirection);
// renderDowntown(arrivalDeltaPerStopDowntownWithDirection);
renderSegments(arrivalDeltaPerSegment);

function renderBanfield(data) {
    const div = d3.select('#visualization')
                  .append('div')
                  .attr('class', 'banfield-delta');
    createHorizontalBarChart(data, div, Object.assign({}, {
        width: 960,
        height: 500,
        margin: { top: 100, right: 100, bottom: 100, left: 100 },
        chartTitle: "Estimated vs Actual Arrival Time (Banfield)",
        xAxisLabel: "Seconds From Expected",
        xVal: "arrival_delta",
        yVal: "stop_name",
    }));
}

function renderInterstate(data) {

    const div = d3.select('#visualization')
                  .append('div')
                  .attr('class', 'interstate-delta');
    createHorizontalBarChart(data, div, Object.assign({}, {
        width: 960,
        height: 700,
        margin: { top: 100, right: 100, bottom: 100, left: 150 },
        chartTitle: "Estimated vs Actual Arrival Time (Interstate)",
        xAxisLabel: "Seconds From Expected",
        xVal: "arrival_delta",
        yVal: "stop_name",
    }));
}

function renderDowntown(data) {
    const div = d3.select('#visualization')
                  .append('div')
                  .attr('class', 'downtown-delta');
    createHorizontalBarChart(data, div, Object.assign({}, {
        width: 800,
        height: 500,
        margin: { top: 100, right: 200, bottom: 100, left: 260 },
        chartTitle: "Estimated vs Actual Arrival Time (Downtown)",
        xAxisLabel: "Seconds From Expected",
        xVal: "arrival_delta",
        yVal: "stop_name",
    }));
}

function renderSegments(data) {
    const div = d3.select('#visualization')
                  .append('div')
                  .attr('class', 'all-segments-delta');
    createHorizontalBarChart(data, div, Object.assign({}, {
        width: 800,
        height: 500,
        margin: { top: 100, right: 200, bottom: 100, left: 200 },
        chartTitle: "Estimated vs Actual Arrival Time (All Segments)",
        xAxisLabel: "Seconds From Expected",
        xVal: "arrival_delta",
        yVal: "segment",
    }));
}
