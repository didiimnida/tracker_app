$(function() {

console.log("Start app_db_charts.js.");
  if (typeof hacky_switch !== 'undefined') {
      console.log("Making 3 graphs from local db.");

//Mainpage CHARTS: LOCAL DATABASE
//Initializing variables. 
  var piechart_array = [['Item', 'Price']]; 
  var bar_chart_array = [['Name', 'Actual Price', 'Desired Price']];
  var category_array = [];

//Ajax request gets data from our database and brings it back here in JSON. 
  var request = $.ajax({
      url: '/products',
      type: "GET", 
      dataType: "json"
  });

//Manipulating data from json array.  
  request.done(function(data){
    // console.log(data);
      var total_price = 0.00; 
      var total_desired = 0.00;
      for (var i = 0; i < data.length; i++) {
        var name = data[i]["name"];
        var category = data[i]["category"];
        var desired_price = data[i]["desired_price"];
        var desired_num = parseFloat(desired_price);
        var price = data[i]["price"];
        var num = parseFloat(price);
        piechart_array.push([name,num]);
        bar_chart_array.push([name, num, desired_num]);
        category_array.push(category);
        total_price += num;
        total_desired += desired_num;
        } 

        var difference = (total_price - total_desired).toFixed(2);
//Category Sorting.
        function histogram(arr) {
              var a = [], b = [], prev;
              arr.sort();
              for ( var i = 0; i < arr.length; i++ ) {
                  if ( arr[i] !== prev ) {
                      a.push(arr[i]);
                      b.push(1);
                  } else {
                      b[b.length-1]++;
                  }
                  prev = arr[i];
              }
              return [a, b];
          }
        var category_return = histogram(category_array);
        var category_array_formatted = [['Category','Frequency']];
        for (var i = 0;i<category_return[0].length;i++){
        category_array_formatted.push([category_return[0][i], category_return[1][i]]);
        }

// console.log("Start 3 Charts. ")
// console.log(category_array_formatted);
// console.log(bar_chart_array);
// console.log(piechart_array);
// console.log("End 3 Charts.")

//START CHARTS!
    google.setOnLoadCallback(drawChart);
      function drawChart() {
      //Add 1st Chart:      
        var data = google.visualization.arrayToDataTable(piechart_array);
        
        var options = {
          title: 'Total Price: $' + total_price.toFixed(2) + '\n' + 'Total Desired Price: $' + total_desired.toFixed(2) + '\n' + 'Price Difference: $' + difference ,
          legend: {textStyle: {fontSize: 12}},
          // pieSliceText: 'value',
          fontSize: 16,
          fontName: 'Play',
          colors:['#d9534f','#2C3539', '#E5E4E2', '#d43f3a', 'grey', 'black', '#D91E37']
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      //End 1st Chart. 
      //Add 2nd Chart:
        var data2 = google.visualization.arrayToDataTable(bar_chart_array);

        var options2 = {
          title: 'Actual Price vs. Desired Price',
          // vAxis: {title: 'Product'},
          fontSize: 16,
          fontName: 'Play',
          colors:['#d9534f','grey']
        };

        var chart2 = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart2.draw(data2, options2);
      //End 2nd Chart.
      //Add 3rd Chart:
        var data3 = google.visualization.arrayToDataTable(category_array_formatted);
        
        var options3 = {
          title: 'My Items by Category:',
          legend: {textStyle: {fontSize: 16}},
          pieSliceText: 'value',
          fontSize: 16,
          fontName: 'Play',
          colors:['#d9534f','grey','#2C3539', '#E5E4E2', '#d43f3a', 'black', '#D91E37']
        };
        var chart3 = new google.visualization.PieChart(document.getElementById('histopie'));
        chart3.draw(data3, options3);
      //End 3rd Chart.
      }


  });

  } else {
    console.log("Skipped if switch in app_db_charts.js.");
  }
    
});


 