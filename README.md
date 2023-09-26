# Belly-Button-Challenge
------------
## Project Description

### Goal
Visualize the data collected in a study about belly button wash frequency and the types and number of bacteria found in the various subject's belly buttons. This was my first experience, outside of in class learning, using the D3 library, using the "this" keyword, creating a dropdown, synthesizing and formatting a bubble chart, as well as a gauge chart. 

------------
## Credits
A tutor from my edX Team, Bethany Lindberg, helped me set up the dropdown and bar chart information. I used ChatGPT when I got stuck. The data used was from Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.

------------
## Softwares Used
### Libraries
Plotly
D3

### CSS Style Sheet
Bootstrap

### Languages
Javascript
HTML

### Software
VSCode
GitLens
LiveServer

------------
## Code Explanation with Figures/Visualizations
- Used D3 to pull in the data from the samples.json file from a url.
- Stored study information in the sample and metadata variables by filtering for objects where the object's id matches the individualID participants ID that was selected in the dropdown.
- Set up a variable for the demographic information that will be added to a table by using d3.select to find the portion of the HTML that matches the id=sample.metadata.
- Used a for loop to retrieve the key and value pairs from the metadata in samples.jason and append the key and value pairs to the demographicInfo html portion so the key value pairs appear in the demographic information table.

![image](https://github.com/SamanthaMcKay/Belly-Button-Challenge/assets/132176159/cdd6c413-5a42-4b85-a19c-b3f9c1619104)

- Prepare the data for the bar and bubble charts. For the bar, I used the slice method to keep only the OTUs with the 10 highest sample values observed. The bubble chart data did not require a slice as I was graphing all of the bacteria found.
- Set up the layouts for both the bubble and bar charts and plotted the charts.
- 
#### Bar

![image](https://github.com/SamanthaMcKay/Belly-Button-Challenge/assets/132176159/23bec508-77d0-4eb4-92ff-651f5cfb7d0f)

#### Bubble

![image](https://github.com/SamanthaMcKay/Belly-Button-Challenge/assets/132176159/0a2ee815-a40c-4e75-892d-3e425383773c)

### Bonus

- Set up a gauge to display the number of times the subject reported washing their belly button each week.
- I ran into trouble graphing an accurate dial on the gauge.

### Gauge

  ![image](https://github.com/SamanthaMcKay/Belly-Button-Challenge/assets/132176159/1624a65a-760b-4294-8f1d-6677df88aaae)


## Initiation

- Created the init function to initiate the dropdown by selecting the html where id=selDataset and appending the subjectIDs to the text and value property in the <option> element of the html.
- Set the first/default subject to be subject 940.
- Added an event listener to make sure that the system waits until the HTML document is fully loaded before trying to initiate the dropdown.
- Finally, called the init function to process the new individualID selected in the dropdown and create and display the associated charts.

### Dropdown

![image](https://github.com/SamanthaMcKay/Belly-Button-Challenge/assets/132176159/ead8904f-37a8-414a-a2fa-5a830ddda66b)


## Conclusion
I ran into particular trouble getting the dropdown to populate, but found that the event listener that I added resolved the issues I was seeing. I enjoyed visualizing the data with a bubble chart. I have seen them before, but I have never used them. The fact that the bubble chart looks like a microbial plate was of particular interest to me. In future, I would like to learn if I could make a bubble chart in the shape of a petri dish. I think it could look stunning.





