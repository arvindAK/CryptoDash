import HighCharts from "./HighchartsConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import HighChartsConfig from "./HighchartsConfig";
import HighchartsTheme from "./HighchartsTheme";
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {({}) => (
        <Tile>
          <ReactHighcharts config={HighChartsConfig()} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
