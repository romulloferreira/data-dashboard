var states = ['SP', 'RJ', 'MG', 'RS', 'PR'];

var deaths_states = [66798, 34830, 21540, 16507, 14658];

var country_name_brazil = 'States';

var trace1 = {
  x:states,
  y:deaths_states,
  type: 'bar',
  marker: {
    color: 'red'
  }
  
};


var layout = {
  title:'Cumulative coronavirus deaths on 2021-03-19 by state',
  xaxis: {
    title: 'states',
    
  },
  yaxis: {
    title: 'Total coronavirus deaths',
  }
};

var data = [trace1];

Plotly.newPlot('plot4', data, layout);