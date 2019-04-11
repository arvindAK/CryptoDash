export default function(historical, timeInterval) {
  return {
    title: {
      text: ""
    },

    yAxis: {
      title: {
        text: "Price"
      }
    },
    xAxis: {
      type: "datetime",
      title: {
        text: timeInterval.charAt(0).toUpperCase() + timeInterval.slice(1)
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    series: historical,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {}
        }
      ]
    }
  };
}
