import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries
} from 'react-vis';

const Graph=(props)=> {
  return (
    <XYPlot width={600} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <AreaSeries
        className="area-series-example"
        curve="curveNatural"
        data={props.dataForGraph}
      />
    </XYPlot>
  );
}
export default Graph