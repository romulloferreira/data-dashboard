var states = ['SP', 'MG', 'PR', 'RS', 'BA'];

var cases_states = [2280033, 1014079, 789685, 780186, 762616];

var country_name_brazil = 'Region';

var trace1 = {
  x:states,
  y:cases_states,
  type: 'bar',
  
};


var layout = {
  title:'Cumulative cases on 2021-03-19 by state',
  xaxis: {
    title: 'states',
    
  },
  yaxis: {
    title: 'Total coronavirus cases',
  }
};

var data = [trace1];

Plotly.newPlot('plot3', data, layout);