function labeledXAxis(selection, props) {
    const {
        xScale,
        xAxisLabel,
        xAxisLabelFill,
        xAxisLabelOffset,
        xAxisLabelFontSize,
        xAxisTickFontSize,
        xAxisTickFontFill,
        xAxisTickLineStroke,
        xAxisTickDensity,
        xAxisDomainLineStroke,
        innerHeight,
        innerWidth
    } = props;

    const xAxis = d3.axisBottom(xScale)
                    .ticks(innerWidth / xAxisTickDensity);
    let xAxisG = selection.selectAll('.x-axis').data([null]);
    xAxisG = xAxisG.enter()
                   .append('g')
                    .attr('class', 'x-axis')
                   .merge(xAxisG)
                    .attr('transform', `translate(0, ${innerHeight})`);
    xAxisG.call(xAxis)
          .selectAll('.tick text')
          .style('font-size', xAxisTickFontSize)
          .attr('fill', xAxisTickFontFill)
          .attr('transform', 'rotate(-90)')
          .attr('x', 170)
          .attr('y', -5);

    xAxisG.selectAll('.tick line')
          .attr('stroke', xAxisTickLineStroke);
    xAxisG.selectAll('.domain')
          .attr('stroke', xAxisDomainLineStroke);

    // x Axis Label
    const xAxisLabelText = xAxisG.selectAll('.axis-label')
                             .data([null]);
    xAxisLabelText.enter()
              .append('text')
                .attr('class', 'axis-label')
              .merge(xAxisLabelText)
              .text(xAxisLabel)
                .attr('fill', xAxisLabelFill)
                .attr('x', innerWidth / 2)
                .attr('y', xAxisLabelOffset)
                .style('font-size', xAxisLabelFontSize);
}

function labeledYAxis(selection, props) {
    const {
        yScale,
        yAxisLabel,
        yAxisLabelFill,
        yAxisLabelOffset,
        yAxisLabelFontSize,
        yAxisTickFontSize,
        yAxisTickFontFill,
        yAxisTickLineStroke,
        yAxisTickDensity,
        yAxisDomainLineStroke,
        innerHeight
    } = props;

    const yAxis = d3.axisLeft(yScale)
                    .ticks(innerHeight / yAxisTickDensity);
    let yAxisG = selection.selectAll('.y-axis').data([null]);
    yAxisG = yAxisG.enter()
                   .append('g')
                        .attr('class', 'y-axis')
                   .merge(yAxisG);
    yAxisG.call(yAxis)
          .selectAll('.tick text')
          .style('font-size', yAxisTickFontSize)
          .attr('fill', yAxisTickFontFill);
    yAxisG.selectAll('.tick line')
          .attr('stroke', yAxisTickLineStroke);
    yAxisG.selectAll('.domain')
          .attr('stroke', yAxisDomainLineStroke);

    // y Axis Label
    const yAxisLabelText = yAxisG.selectAll('.axis-label')
                             .data([null]);
    yAxisLabelText.enter()
              .append('text')
                .attr('class', 'axis-label')
              .merge(yAxisLabelText)
              .text(yAxisLabel)
                .attr('fill', yAxisLabelFill)
                .attr('y', -yAxisLabelOffset)
                .attr('x', -innerHeight / 2 + (innerHeight / 10))
                .attr('transform', 'rotate(-90)')
                .style('font-size', yAxisLabelFontSize);
}
