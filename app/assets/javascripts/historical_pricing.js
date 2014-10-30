$(document).ready(function(){

  //Get the JSON Hash from the show.html.erb script tag.  It is saved as show_product!!!
  console.log("NOW RUNNING historical_pricing.js");
  if (typeof show_product !== 'undefined') {
    console.log("Making the historical graph!");
    var historical_array = [['Date', 'Price']];

    for(var i = 0; i < show_product["results"].length; i++){
        var price = show_product["results"][i]["price"];
        var date = show_product["results"][i]["lastrecorded_at"];
        price = parseFloat(price);
        // date = parseFloat(date);
        // console.log(date);
        // console.dir(price);
        historical_array.push([date, price]);
    }
    console.dir(historical_array);

      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(historical_array);

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


  } else {
    console.log("No show_product variable found in historical_pricing.js! ", typeof show_product);
  }

});





