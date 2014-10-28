google.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Categories', 'Number of Items'],
          ['Electronics',     4],
          ['Phones',      1]
        ]);

        var options = {
          title: 'My Saved Products'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);

        var data = google.visualization.arrayToDataTable([
          ['Date', 'Price'],
          ['2004',  1000],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

        var options = {
          title: 'Historical Pricing:'
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }