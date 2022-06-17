



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7],
    
 
    
  ]);

  var options = {
    title: 'My Daily Activities',
    titlePosition: 'none',
    /*
    hAxis: {
        titleTextStyle: {color: '#607d8b'}, 
        gridlines: { count:0}, 
        textStyle: { color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true}
      },
      vAxis: {
        minValue: 0, 
        gridlines: {color:'#37474f', count:4}, 
        baselineColor: 'transparent'
      },*/
      legend: { textStyle: {color:'#607d8b', fontName: 'Roboto', fontSize: '12'} },
      colors: /*["#000d1a", "#00264d", "#004080", "#0059b3", "#0073e6", "#1a8cff", "#4da6ff", "#80bfff", "#b3d9ff"]*/["#003870", "#0A579E", "#1578CF", "#249CFF" , "#77C2FE" ],
      areaOpacity: 0.24,
      lineWidth: 1,
      backgroundColor: 'transparent',
      chartArea: {
        backgroundColor: "transparent",
        width: '100%',
        height: '80%'
      },
      
      height:250, 
      //width:350,
      
      pieSliceBorderColor: '#263238',
      pieSliceText: 'value',
      pieSliceTextStyle:  {color:'#0000', fontSize:'12' },
      pieHole: 0.7,
      bar: {groupWidth: "40" },
      colorAxis: {colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4"] },
      backgroundColor: 'transparent',
      datalessRegionColor: '#37474f',
      
      displayMode: 'regions'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}








google.charts.load('current', {
  'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ]);
  
  var options = {
    colorAxis: {colors: ['#008b8b','#00FFFF']},
    backgroundColor: 'transparent',
    //width: 550,
    height: 250,
    legend: {'position':'left'}
  };

  var chart = new google.visualization.GeoChart(document.getElementById('country_div'));

  chart.draw(data, options);

}



google.charts.load('current',{packages:['corechart']});

google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Month');
  data.addColumn('number', 'Sales');
  data.addColumn({type: 'number', role: 'annotation'});

  data.addRows([
    ['Italy', 55, 55],
    ['France', 49, 49],
    ['Spain', 44, 44],
    ['USA', 24, 24],
    ['Argentina', 15, 15],
    ['Italy', 55, 55],
    ['France', 49, 49],
    ['Spain', 44, 44],
  ]);
  
  var options = {
    title: 'World Wide Wine Production',
    titleTextStyle: {color: 'white', fontSize:15},
   // width: 450,
    height: 350,
    backgroundColor: 'transparent',
    animation:{
      duration: 1000,
      easing: 'in',
      startup: true,
     
      
    },

    annotations: {
      textStyle: {
        fontName: 'Times-Roman',
        fontSize: 12,
        bold: true,
        
        // The color of the text.
        color: 'white',
        // The color of the text outline.
        //auraColor: '#d799ae',
        // The transparency of the text.
        
      }},

    hAxis: {
      
      textStyle: {color: 'white'},
      baselineColor: 'white'
    },

    vAxis: {
      
      textStyle: {color: 'white'},
      baselineColor: 'white'
    },

    legend: {position: 'top', textStyle: {color: 'white', fontSize: 16}}
  };
  
  var chart = new google.visualization.BarChart(document.getElementById('barChart'));
  chart.draw(data, options);
  
  }








google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawAreaChart);

function drawAreaChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses','Card'],
          ['2013',  1000,      400, 100],
          ['2014',  1170,      460, 200],
          ['2015',  660,       1120, 400],
          ['2016',  1030,      540, 500]
        ]);

        var options = {
          title: 'Company Performance',
          titleTextStyle: {color: 'white', fontSize:25},

          

         // width: 880,
          height: 350,
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
          animation:{
            duration: 1000,
            easing: 'in',
            startup: true,
           
            
          },

          hAxis: {
      
            textStyle: {color: 'white'},
            baselineColor: 'white'
          },
      
          vAxis: {
            
            textStyle: {color: 'white'},
            baselineColor: 'white'
          },
          legend: {textStyle: {color: 'white', fontSize: 16}},
          
          chartArea: {left:50,'width': '75%', 'height': '70%'},
          backgroundColor: 'transparent'
        };

        var chart = new google.visualization.AreaChart(document.getElementById('areaChart'));
        chart.draw(data, options);
}
    




google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawLineChart);

function drawLineChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
      ]);

      var options = {
        //width: 350,
        height: 250,
        backgroundColor: 'transparent',
        title: 'Company Performance',
        titleTextStyle: {color: 'white', fontSize: 20},
        curveType: 'function',
        legend: { position: 'bottom' },
        chartArea: {left:40, right:30},
        hAxis: {
      
          textStyle: {color: 'white'},
          baselineColor: 'white'
        },
    
        vAxis: {
          
          textStyle: {color: 'white'},
          baselineColor: 'white'
        },
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
}
  























