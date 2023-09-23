// Create the url variable to use in the d3.json.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
let theData=[];
// Fetch the JSON data.
function newSubjects(individualId) {
d3.json(url).then(data => {
  theData=data;
  console.log("Data loaded successfully",theData);
  let sample=data.samples.filter(obj=>obj.id==individualId)[0]
  console.log(sample)
  let barData=[{
    y:sample.otu_ids.slice(0,10).map(obj=>`OTU ${obj}`).reverse(),
    x:sample.sample_values.slice(0,10).reverse(),
    text:sample.otu_labels.slice(0,10).reverse(),
    type: "bar",
    orientation:"h"
  }]
  let barLayout={title:"Top 10 OTUs Found"};
  Plotly.newPlot("bar",barData,barLayout)
// });
  // fillInDropdown();
  // newSubjects(theData.samples[0].id);
});}
function init(){
  let selecter=d3.selectAll("#selDataset");
  d3.json(url).then((data)=>{
    console.log(data.names)
    for(let i=0; i<data.names.length; i++){
      selecter.append("option").text(data.names[i]).property("value",data.names[i]);
    }
  })
  newSubjects(940);
} 
function optionChanged(individualID){
  newSubjects(individualID);
}
init();
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
// //First, get into the part of the data with the sample information.
// subjectInfo=[];
// for (let i=0;i>samples.length;i++){
//   subjectInfo.push(samples[i]);
// }
// const subject=theData.samples;
// console.log("Heres the map", subjectInfo)

// // //Make a function that I can use on the bar chart. 
// // //Finds the subject who has the id the matches the currect subject
// // //The data is sorted highest to lowest appearance of bacteria, so slice the first ten bacteria and values.

//   var subjectData=subject.find(sample=>sample.id ===individualId)[0];
//   var top10OTU=subjectData.otu_labels.slice(0,10);
//   var topOTUValue=subjectData.sample_values.slice(0,10);
// }
// //Dropdown menu stuff.
// function fillInDropdown() {
//   const dropdownMenu=d3.select("#selDataset");
//   let subjectIDs=subject.map(sample => sample.id);
//   //used chatgpt for this part.
//   dropdownMenu
//   .selectAll("option")
//   .data(subjectIds)
//   .enter()
//   .append("option")
//   .attr("value", d => d)
//   .text(d => d);
// }

// //What to do when the dropdown is changed.
// function optionChanged(selectedSubject) {
//   newSubjects(selectedSubject);
//   let trace1 = {
//     x: top10OTU,
//     y: topOTUValue,
//     type: "bar-h"
//   };
// }


// sample_values= values for the bar Chart 

// otu_ids as the labels for the bar chart 

// otu_labels as the hovertext for the chart


//Create a bubble chart that displays each sample.

// otu_ids for the x values

// sample_values for the y values

// sample_values for the marker size  

// otu_ids for the marker colors 

// otu_labels for the text values


//Display the sample metadata ie an individuals demographic information


//display each key-value pair from the metadata JSON object somewhere on the page.



//UPdate all the plotes when a new sample is selected.


//Deploy your app to a free static page hosting service, such as GitHub Pages. 