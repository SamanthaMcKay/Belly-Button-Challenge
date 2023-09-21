// Create the url variable to use in the d3.json.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual

sample_values= values for the bar Chart 

otu_ids as the labels for the bar chart 

otu_labels as the hovertext for the chart


//Create a bubble chart that displays each sample.

otu_ids for the x values

sample_values for the y values

sample_values for the marker size  

otu_ids for the marker colors 

otu_labels for the text values


//Display the sample metadata ie an individuals demographic information


//display each key-value pair from the metadata JSON object somewhere on the page.



//UPdate all the plotes when a new sample is selected.


//Deploy your app to a free static page hosting service, such as GitHub Pages. 