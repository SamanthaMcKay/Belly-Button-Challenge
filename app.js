// Create the url variable to use in the d3.json.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
let theData=[];
// Fetch the JSON data and set up a function called newSubject to trigger when the dropdown is changed. My tutor helped me set this up.
function newSubject(individualId) {
  d3.json(url).then(data => {
    theData=data;

//Filter the data to find the object where the individualID selected in the dropdown matches the object's id. My tutor helped me set this up. 
  let sample=data.samples.filter(obj=>obj.id==individualId)[0];

  let metadataInfo=data.metadata.filter(obj=>obj.id==individualId)[0];

//Store the html location where we will insert the sample metadata to show up on the demographic info chart.
  let demographicInfo = d3.select("#sample-metadata");

// Clear the existing options for demographic information. 
  demographicInfo.html("");

// Iterate through metadataKeys and append options.ChatGPT helped me refine how to code this.
  for (let key in metadataInfo) {
    let value = metadataInfo[key];
    demographicInfo.append("p").text(`${key}: ${value}`);
};

//Set up the data for the bar chart, selecting the top 10 highest OTUs. My tutor helped me set this up.
  let barData=[{
    y:sample.otu_ids.slice(0,10).map(obj=>`OTU ${obj}`).reverse(),
    x:sample.sample_values.slice(0,10).reverse(),
    text:sample.otu_labels.slice(0,10).reverse(),
    type: "bar",
    orientation:"h"
  }];

//Set up the data for the bubble chart.
  let bubbleData=[{
    x:sample.otu_ids,
    y:sample.sample_values,
    mode:'markers',
    marker: {
      size: sample.sample_values.map(value=>value*0.6),
      color: sample.otu_ids,
      colorscale: 'Earth'
    },
    text: sample.otu_labels
  }];

  //Set up the layout for the bar chart and plot the bar chart. My tutor helped me set this up.
  let barLayout={title:"Top 10 OTUs Found"};
  Plotly.newPlot("bar",barData,barLayout);

  //Set up the layout for the bubble chart and plot the bubble chart.
  let bubbleLayout={
    title:"OTU Bubble Chart",
    xaxis:{title:"OTU ID"},
    yaxis:{title:"Sample Values"}
  };
  Plotly.newPlot("bubble",bubbleData,bubbleLayout);

  //For extra practice, set up a gauge chart for the number of times a person washed their belly button each week. I used chatGPT to help me try to add the dial.
  //I was unable to add the dial and have it display correctly.
  var gaugeData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: metadataInfo.wfreq,
      title: { text: "Belly Button Washing Frequency <br\> Scrubs per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { 
          range: [null, 9],
          visible: true,
          tickmode: "array", 
          tickcals:[0,1,2,3,4,5,6,7,8,9],
          ticks:"outside"
        },
        bar: {
          color: 'green',
          line:{
            color:"red",
            width:6
          },
          thickness:0
      },
        bgcolor: "white",
        borderwidth:3,
        bordercolor: "darkbrown",
        shape: "angular",
        steps: [
          { range: [0, 1], color: "ivory" },
          { range: [1, 2], color: "wheat" },
          { range: [2, 3], color: "tan" },
          { range: [3, 4], color: "darkgoldenrod" },
          { range: [4, 5], color: "olive" },
          { range: [5, 6], color: "olivedrab" },
          { range: [6, 7], color: "forestgreen" },
          { range: [7, 8], color: "green" },
          { range: [8, 9], color: "darkgreen" },
        ], 
      },
    },
  ];

//Set up the layout for the gauge chart and plot the gauge chart.
const gaugeLayout={
    width:600,
    height:450,
};
Plotly.newPlot('gauge', gaugeData, gaugeLayout);
})};

//Create the function init to initiate when the dropdown is changed. This populates the dropdown and appends the option in the html.
function init(){
  let selecter=d3.selectAll('#selDataSet');
  d3.json(url).then((data)=>{
    for(let i=0; i<data.names.length; i++){
      selecter.append("option").text(data.names[i]).property("value",data.names[i]);
    };
 }); 
//This sets the initial subject as the first subject in the dropdown. This is the default.
  newSubject(940);
} 

//This uses the this.value in the function optionChanged and appends whatever subject ID was selected in the dropdown.
function optionChanged(individualId){
  newSubject(individualId);
}

//ChatGPT was used to help me get my dropdown to work. It tells the system to wait until the HTML document is fully loaded before trying to initiate the dropdown.
//Initiate the function init to run everything with the newly selected ID.
document.addEventListener("DOMContentLoaded", function() {
  init();
});
