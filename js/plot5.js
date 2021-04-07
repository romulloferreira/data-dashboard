var dates = ['13/03', '14/03', '15/03', '16/03', '17/03', '18/03', '19/03'];

var cases_brazil = [11439558, 11483370, 11519609, 11603535, 11693838, 11780820, 11871390];

var country_name_brazil = 'Dates';

var trace1 = {
  x:dates,
  y:cases_brazil,
  mode: 'lines+markers',
  type: 'scatter',
  
  
};


var layout = {
  title:'Total cumulative coronavirus cases on 2021-03-19',
  xaxis: {
    title: 'date',
    
  },
  yaxis: {
    title: 'Total coronavirus cases',
  }
};

var data = [trace1];

Plotly.newPlot('plot5', data, layout);