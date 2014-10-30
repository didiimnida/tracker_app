$(document).ready(function(){

  //Get the JSON Hash from the show.html.erb script tag.  It is saved as show_product!!!
  console.log("NOW RUNNING historical_pricing.js");
  if (typeof show_product !== 'undefined') {
    console.log("I found the show_product variable omg!");
    var historical_array = ['Date', 'Price'];
    for(var i = 0; i < show_product.length; i++){
        var date = show_product["results"][i]["price"];
        var price = show_product["results"][i]["firstrecorded_at"];
        historical_array.push([date, price]);
    }
    console.log(historical_array);
  } else {
    console.log("No show_product variable found! ", typeof show_product);
  }

  google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Price'],
          ['2004',  1000],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

        var options = {
          title: 'Price Trend:',
          legend: {textStyle: {fontSize: 20}},
          fontSize: 20,
          fontName: 'Play',
          colors:['#d9534f','#2C3539', '#E5E4E2', '#d43f3a', 'grey', 'black', '#D91E37']
        };

        var chart = new google.visualization.LineChart(document.getElementById('historicalprice'));

        chart.draw(data, options);
      }

});

// google.setOnLoadCallback(drawChart);
//       function drawChart4() {
//         var data4 = google.visualization.arrayToDataTable(historical_array);
        
//         var options4 = {
//           title: 'Price Trend:',
//           legend: {textStyle: {fontSize: 12}},
//           fontSize: 16,
//           fontName: 'Play',
//           colors:['#d9534f','#2C3539', '#E5E4E2', '#d43f3a', 'grey', 'black', '#D91E37']
//         };
//         var chart4 = new google.visualization.LineChart(document.getElementById('historicalprice'));
//         chart4.draw(data4, options4);
// }





