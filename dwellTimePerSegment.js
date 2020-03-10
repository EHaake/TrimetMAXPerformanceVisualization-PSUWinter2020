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
        title: "Average Dwell Time Per MAX Segment",
        xVal: "segment",
        yVal: "dwell"
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
