# INFO 247 HW: Highcharts
## Instructions

### Setup

Open "index.html" & "_data/SF_rainfall_seasons.csv" in your text editor.

### Goals

You are building a horizontal stacked bar chart and basic line chart using the data provided (San Francisco rainfall by season and year). The disaggregated month data is also included in case you are curious. 

Take a look at **expectedresult.png** & **expectedresult_withtooltip.png** to see what the final result should look like (they are the same charts, but the second screenshot shows a hover state).

### Practice with Highcharts

1. Create a horizontal stacked bar chart and basic line chart by completing the given code. Take a look at http://www.highcharts.com/demo/bar-stacked, http://www.highcharts.com/demo/line-basic & solution-ajax.html in Lab 3 (https://github.com/emilylengle/INFO247_Lab3_Highcharts) to get started.
2. As with the lab assignment, you need to read the data from a CSV file. Set up a local server or upload the files to your I School server space to read the data successfully via AJAX.
3. Take a look at the CSV structure, then follow the instructions outlined in index.html to populate the data properly. Look out for where the comments ask you to "**ADD CODE HERE**."
4. Most of the global options have been set up, but the options for "tooltip" are incomplete. Use the hints provided, consult the Highcharts API documentation (http://api.highcharts.com/highcharts), & fill out the missing options.
5. The two charts share the same categories that appear on the xAxis. Use the API documentation to add in that code.
6. Make minor edits to the HTML and CSS to ensure your code mimics expectedresult.png.
