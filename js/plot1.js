var region = ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul'];

var cases_brazil = [1257843, 2741080, 1277936, 4267653, 2326878];

var country_name_brazil = 'Region';

var trace1 = {
  x:region,
  y:cases_brazil,
  type: 'bar',
  
};


var layout = {
  title:'Cumulative cases on 2021-03-19 by Country Zone',
  xaxis: {
    title: 'region',
    
  },
  yaxis: {
    title: 'Total coronavirus cases',
  }
};

var data = [trace1];

Plotly.newPlot('plot1', data, layout);