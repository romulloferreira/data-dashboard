var state = ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul'];


var deaths_brazil = [25863, 63408, 30447, 130050, 40546];

var country_name_brazil = 'State';


var trace1 = {
    x:state,
    y:deaths_brazil,
    type: 'bar',
    marker: {
        color: 'red'
      }
  };

  var layout = {
    title:'Cumulative Deaths on 2021-03-19 by Country Zone',
    xaxis: {
      title: 'region',
      
    },
    yaxis: {
      title: 'Total coronavirus deaths',
    }
  };

var data = [trace1];

Plotly.newPlot('plot2', data, layout);