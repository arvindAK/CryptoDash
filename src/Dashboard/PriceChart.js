import HighCharts from "./HighchartsConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import HighChartsConfig from "./HighchartsConfig";
import HighchartsTheme from "./HighchartsTheme";
import ChartSelect from "./ChartSelect";
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {({ historical, changeChartSelect }) => (
        <Tile>
          <ChartSelect
            defaultValue={"months"}
            onChange={e => changeChartSelect(e.target.value)}
          >
            <option value={"days"}>Days</option>
            <option value={"weeks"}>Weeks</option>
            <option value={"months"}>Months</option>
            <option value={"years"}>Years</option>
          </ChartSelect>
          {historical ? (
            <ReactHighcharts config={HighChartsConfig(historical)} />
          ) : (
            <div>Loading Historical Data...</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
