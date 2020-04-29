import React from 'react';
import Center from 'react-center';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries
} from 'react-vis';

const Graph = (props) => {
  return (
    <Center>
    <XYPlot margin={{ left: 100 }} width={300} height={300}>
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
    </Center>
  );
}
export default Graph