d3.csv('data/downtown.csv', formatter).then(data => {
    d3.csv('data/max_segment_stops.csv').then(segmentData => {
        // console.log(data);

        let arrivalDeltaByLocation = aggregateAttributeOverCol(data, "location_id", "arrival_delta");
        arrivalDeltaByLocation = mapLocationIdToStopName(arrivalDeltaByLocation, segmentData);
        // arrivalDeltaByLocation = aggregateAttributeOverCol(arrivalDeltaByLocation, "stop_name", "arrival_delta");

        console.log(arrivalDeltaByLocation);
    });
});

// format data read from csv file
// choose relevant columns and convert to number values
function formatter(row) {
    return {
        location_id: +row.location_id,
        arrival_delta: +(row.arrive_time - row.stop_time)
    }
}
