var dates = ['13/03', '14/03', '15/03', '16/03', '17/03', '18/03', '19/03'];

var deaths_brazil = [277102, 278229, 279286, 282127, 284775, 287499, 290314];

var country_name_brazil = 'Dates';

var trace1 = {
  x:dates,
  y:deaths_brazil,
  mode: 'lines',
  type: 'scatter',
  
  
};


var layout = {
  title:'Total cumulative coronavirus deaths on 2021-03-19',
  xaxis: {
    title: 'date',
    
  },
  yaxis: {
    title: 'Total coronavirus deaths',
  }
};

var data = [trace1];

Plotly.newPlot('plot6', data, layout);
