function averageAttribute(data, attribute) {
    data = d3.mean(data, d => d[attribute]);
    return data;
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
                d.sequence = +g.sequence;
                d.route_direction = g.route_direction;
            }
        })
    });

    return data;
}

function averageArrivalDeltaPerSegment() {
    data = aggregateAttributeOverCol(arrivalDeltaPerStopInterstate, "route_direction", "arrival_delta");
    console.log(data);
}
