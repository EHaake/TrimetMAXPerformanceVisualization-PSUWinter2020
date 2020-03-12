d3.csv('data/interstate.csv', formatter).then(data => {
    d3.csv('data/max_segment_stops.csv').then(segmentData => {
        // console.log(data);

        let arrivalDeltaByLocation = aggregateAttributeOverCol(data, "location_id", "arrival_delta");
        arrivalDeltaByLocation = mapLocationIdToStopName(arrivalDeltaByLocation, segmentData);
        // arrivalDeltaByLocation = aggregateAttributeOverCol(arrivalDeltaByLocation, "stop_name", "arrival_delta");

        console.log(arrivalDeltaByLocation);

    });
});

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
                d.sequence = +g.sequence;
                d.route_direction = g.route_direction;
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
        arrival_delta: +(row.arrive_time - row.stop_time)
    }
}
