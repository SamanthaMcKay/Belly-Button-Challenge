// Create the url variable to use in the d3.json.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
let theData=[];
// Fetch the JSON data.
function newSubject(individualId) {
  d3.json(url).then(data => {
    theData=data;
  let sample=data.samples.filter(obj=>obj.id==individualId)[0];

  let metadataInfo=data.metadata.filter(obj=>obj.id==individualId)[0];

  let demographicInfo = d3.select("#sample-metadata");

// Clear the existing options (if any)
  demographicInfo.html("");

// Iterate through metadataKeys and append options
  for (let key in metadataInfo) {
    let value = metadataInfo[key];
    demographicInfo.append("p").text(`${key}: ${value}`);
};
  let barData=[{
    y:sample.otu_ids.slice(0,10).map(obj=>`OTU ${obj}`).reverse(),
    x:sample.sample_values.slice(0,10).reverse(),
    text:sample.otu_labels.slice(0,10).reverse(),
    type: "bar",
    orientation:"h"
  }];
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
  let barLayout={title:"Top 10 OTUs Found"};
  Plotly.newPlot("bar",barData,barLayout);
  let bubbleLayout={
    title:"OTU Bubble Chart",
    xaxis:{title:"OTU ID"},
    yaxis:{title:"Sample Values"}
  };
  Plotly.newPlot("bubble",bubbleData,bubbleLayout);
})};
function init(){
  let selecter=d3.selectAll('#selDataSet');
  d3.json(url).then((data)=>{
    for(let i=0; i<data.names.length; i++){
      selecter.append("option").text(data.names[i]).property("value",data.names[i]);
    };
 }); 
  newSubject(940);
} 
function optionChanged(individualId){
  newSubject(individualId);
}
document.addEventListener("DOMContentLoaded", function() {
  init();
});

//Display the sample metadata ie an individuals demographic information


//display each key-value pair from the metadata JSON object somewhere on the page.



//UPdate all the plotes when a new sample is selected.


//Deploy your app to a free static page hosting service, such as GitHub Pages. 