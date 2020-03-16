d3.csv('data/agg_pair_data.csv', formatter).then(data => {
    console.log(data);

    let banfieldData = [];
    let interstateData = [];
    let downtownData = [];

    data.forEach(row => {
        if (row.segment === "interstate") {
            interstateData.push(row);
        } else if (row.segment === 'banfield') {
            banfieldData.push(row);
        } else {
            downtownData.push(row);
        }
    });

    banfieldData = sortData(banfieldData);
    interstateData = sortData(interstateData);
    downtownData = sortData(downtownData);

    const selection = d3.select("#visualization");

    createSubSegmentBarChart(interstateData, selection, Object.assign({}, myTheme, {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        xAxisLabel: 'MAX Stop Sub Sequence',
        yAxisLabel: 'Seconds Per Foot',
        xAxisTickFontSize: '12px',
        yAxisTickDensity: 50,
        yAxisLabelOffset: 90,
        xAxisLabelOffset: 50,
        title: "Unit Cost Between Stops (Interstate)",
        xVal: "sub_segment",
        yVal: "normalized_time",
        xAxisTickFontFill: "white",
        xAxisTickFontSize: "18px"
    }));

});

function formatter(row) {
    return {
        stop_from: formatString(row.stop_from),
        stop_to: formatString(row.stop_to),
        sub_segment: concatFromTo(row.stop_from, row.stop_to, row.sequence, row.direction),
        segment: row.segment,
        direction: row.direction,
        sequence: +row.sequence,
        num_intersections: +row.num_intersections,
        distance: +row.distance,
        time_length: +row.time_length,
        normalized_time: (+row.time_length / +row.distance)
    };
}

function concatFromTo(from, to, seq, direction) {
    from = formatString(from);
    to = formatString(to);

    return  "(" + direction +") : " + from + " -> " + to;
}

function formatString(str) {
    let newStr = str.replace(" MAX Station", "");
    newStr = newStr.replace(" TC", "");

    var indexOfSlash = newStr.lastIndexOf("/");
    if (indexOfSlash !== -1) {
        newStr = newStr.substring(0, indexOfSlash);

    }
    return newStr;
}

function sortData(data) {
    data.sort((a, b) => {
        return d3.ascending(a.direction, b.direction) || d3.ascending(a.sequence, b.sequence);
    })
    return data;
}
