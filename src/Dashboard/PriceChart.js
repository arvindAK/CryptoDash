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
      {({
        historical,
        changeChartSelect,
        timeInterval,
        changeChartSelectDataPoints
      }) => (
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
          <ChartSelect
            defaultValue={"10"}
            onChange={e => changeChartSelectDataPoints(e.target.value)}
            name="dataPoints"
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </ChartSelect>

          {historical ? (
            <ReactHighcharts
              config={HighChartsConfig(historical, timeInterval)}
            />
          ) : (
            <div>Loading Historical Data...</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
