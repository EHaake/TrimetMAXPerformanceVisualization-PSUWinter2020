function addTitle(selection, props) {
       const {
              width,
              titleFontSize,
              titleFontFamily,
              titleFontFill,
              title
       } = props;

       // Add Graph Title
       selection.append("text")
                .attr("x", width / 2)
                .attr("y", 40)
                .attr("dy", "1em")
                .attr('font-family', titleFontFamily)
                .attr('fill', titleFontFill)
                .style("text-anchor", "middle")
                .style("font-size", titleFontSize)
                .text(title);
}
