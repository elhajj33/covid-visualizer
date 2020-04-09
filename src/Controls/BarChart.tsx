import React from "react";
import { ResponsiveBar, BarProps} from "@nivo/bar";


export interface IBarChartProps  {
    Data: Object[];
    BarChartProps: BarProps;
    TickValues: string[];
}

export class BarChart extends React.Component < {barChartProps: IBarChartProps} > {
  render() {
    // Nivo theming
const theme = {
  axis: {
    ticks: {
      line: {
        stroke: "#e9ecee",
        strokeWidth: 0
      },
      text: {
        fill: "#919eab",
        fontFamily: "Nunito"
      }
    }
  },
  grid: {
    line: {
      stroke: "#e9ecee",
      strokeWidth: 0.5
    }
  },
  legends: {
    text: {
      fontFamily: "Nunito"
    }
  }
};
    return (
      <ResponsiveBar
        theme={theme}
        data={this.props.barChartProps.Data}
        keys={this.props.barChartProps.BarChartProps.keys}
        indexBy={this.props.barChartProps.BarChartProps.indexBy}
        groupMode={this.props.barChartProps.BarChartProps.groupMode}
        margin={{
          top: 36,
          right: 32,
          bottom: 36,
          left: 32
        }}
        layout={this.props.barChartProps.BarChartProps.layout}
        padding={0.25}
        colors={this.props.barChartProps.BarChartProps.colors}
        borderColor="#919eab"
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 36
        }}
        axisLeft={{
          orient: "left",
          tickPadding: -10,
          tickRotation: 0,
          legend: "",
          legendPosition: "start",
          legendOffset: 20
        }}
        legends={this.props.barChartProps.BarChartProps.legends}
        enableGridY={true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#fff"
        enableLabel={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={this.props.barChartProps.BarChartProps.tooltip ? this.props.barChartProps.BarChartProps.tooltip : undefined}
      />
    );
  }
}