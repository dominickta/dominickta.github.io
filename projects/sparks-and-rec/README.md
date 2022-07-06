# Sparks & Rec Repo

Team Members: Megan Ebers, Elizabeth Pelletier, Dominick Ta, Brett Wortzman

This repo is deployed at: https://cse512-22sp.pages.cs.washington.edu/sparks-and-rec/

# Final Writeup

## I. Project Motivation

For our final project, we created a narrative visualization article detailing key findings from an [OutdoorRD dataset](https://docs.google.com/document/d/1cJM83VckR2gCmTyK39TqsklhN6JBBB6RjqKdqdYq-bU/edit) on estimated number of visits of trails in the Columbia River Gorge area before and after the Eagle Creek Fire.

This was a continuation of our [Assignment 3 interactive visualization](https://cse512-22sp.pages.cs.washington.edu/l_m_d_b/). We were proud of how much information it could provide to users who've never seen this dataset before, while simultaneously not being overwhelming.

However, although this dataset was relatively small, we knew it was very complex and our first draft did not do it justice. With our new take towards visualizing this dataset, we are providing a gentle walkthrough of this complex dataset and story so that anyone will be able to read our article and walk away with specific insights. Viewers who have more subject matter expertise will also be able to dig in to our detailed visualizations and gain new insights. This visualization is useful for both researchers and the general public!

## II. Research Questions & Design Goals

The research questions we focused on were provided by the [OutdoorRD team](https://www.outdoorrd.org/):
- How did the fire affect trail use?
    - Among trails that were closed and reopened, did trail use return to pre-fire levels and after how long?
    - Did trails that remained opened see increases in visits after the fire (due to spillover from closed trails)? 
- How did trail use vary over time, including seasonally (throughout the year) and over time (across years)? 

We had two overarching goals for our project based on two intended audiences:
1. Answer OutdoorRD's questions in a way that would be useful to the research team
2. Allow a broader audience to learn about the Eagle Creek Fire and trail use in the Columbia River Gorge area

Taking these two main goals and audiences into account, our design goals were shaped by the feedback we received from OutdoorRD and peer feedback from our A3 submission:
- Reduce cognitive load for users learning about the Eagle Creek fire for the first time
- Help users explore and make their own conclusions
- Clearly communicate answers to research questions
- Users leave feeling satisfied without feeling anything is missing

## III. Approach

| Goal      | Approach |
| ------------- | ----------- |
| Reduce cognitive load for users learning about the Eagle Creek fire for the first time    | Orient the users to the story & dataset with introductory narrative text & visualizations of basic facts      |
| Help users explore and make their own conclusions   | Provide open-ended exploratory visualizations that help users make spatiotemporal comparisons|
| Clearly communicate answers to research questions   | Provide multiple pieces of evidence via several forms of visualization (e.g. animation, static, specific)  |
| Users leave feeling satisfied without feeling anything is missing   | Provide conclusions, news updates coming after the dataset (post-2019), address concerns/future work |

### Data 

We had two data sources:

*1. Outdoor R&D TrailTrends Visitation model:* uses social media and web data to estimate monthly visits to each trail (Wood et al 2020). The data include visit counts for 41 trails near the Columbia River in Oregon and Washington, and span the time period of September 2014 through August 2019.

*2. National Oceanic and Atmospheric Administration Climate Data Online:* For the statistical model, we pulled weather data from NOAA that indicates monthly participation and average temperature at their Cascade Locks, OR weather station. 

### Method for Modeling Predicted Trail visits

In order to further explore how visits to each trail changed after the fire, we decided to use a statistical model to generate estimates of what post-fire visits would have been had pre-fire visit trends continued. We used data from the National Oceanic and Atmospheric Administration (NOAA) Climate Data portal to determine average temperature and total precipitation for each month at the Cascade Locks, OR weather station. Using pre-fire data, we fit a Poisson regression model predicting visit counts as a function of temperature, precipitation, and month, with trail and year fixed effects. We then used this model to generate predicted visit counts in the post-fire era, given the precipitation, temperature, trail, and month of the year and assigning the year to be 2017 (the most recent year). This allowed us to estimate the difference between trail visits after the fire and an estimated baseline of what those visits would have been had the fire not occurred. 

### Design Decisions

#### Visual Encodings

Our work was heavily informed by Mackinlay's (1986) work on effectiveness of visual encodings. Most of our visualizations encode trail visits using position or length, deemed the two most effective ways to encode quantitative variables. When encoding trail visit rankings as an ordinal ranking variable, we also use position. We often use color to encode nominal variables such as trail burn and closure status. We have adopted Tufte's (1983) principles for minimizing chartjunk and attempt to only use marks that are strictly necessary to convey information to viewers. 

**Trail closure status grid.** This visualization gives viewers context on trail closure timelines. We encode trail closure status using color and array months along the x-axis, a typical timeline format that will be familiar to viewers. 

**Bar charts of trail popularity rankings pre-fire.** In this visualization, vertical position encodes popularity rankings and color encodes burn status, indicating that many popular trails were burned in the Eagle Creek Fire. Bar length encodes number of visits, which allows viewers to compare visitation across trails and over time.

**Interactive line chart and map.** This is the core visualization of our project. This visualization is interactive and allows viewers to see how trail visits changed over time, for different trails, before and after the fire. The map enables viewers to get a sense of where the trails were located, and burn and closure status of the trails are encoded with the color and pattern of the site outlines. As users scroll across the line chart timeline, colors in the map shift to encode the number of visits across trails, depicting the spatial pattern of trail visits. Users can select one or more trails of interest on the map and see its line highlighted on the line chart. The line chart encodes monthly visit counts using position on the y-axis, with time displayed on the x-axis. A comparable visualization depicting the statistical model results depicts the difference between post-fire visits and predicted visits based on pre-fire trends. We spent a significant amount of time trying to reduce the size of the map to better align with the size of the line chart, but were not able to accomplish this. This is certainly a limitation of our current version. We were also unable to address an issue where each date marker was doubled on the x-axis (this is true in both visualizations, but especially noticeable in the second one with the predicted vs. actual visits). We recognize this as a flaw and would have fixed it given more time!

**Heat map of visit frequency by trail, month, and year.** This visualization delves into the seasonal patterns in trail use in a bit more detail. We encode visit counts on a log scale with color, displaying each trail's monthly and annual patterns in a grid layout. We indicate the fire timing with an orange rectangle. 

**Animated 'race' chart of monthly trail popularity.** This visualization allows viewers to see how trail popularity evolved over time. We encode trail burn status using color to allow viewers to see how many of the most popular trails in the region were ones that burned. After the fire, the rankings of trail popularity shifted dramatically. Bar length encode visits, and vertical position encodes visit ranking.

#### Narrative 

We utilized Aparna Ghosh's lecture on narrative visualizations (Ghosh, 2022) to shape the story we told, the visualizations we picked, and how we told it. To start we chose to have a "author-driven" and "magazine style" news story because we wanted to give readers strong structure as we guide them through this complex story and dataset. Additionally, we took Ghosh's tips for newswriting and included the 5 W's & H, and an inverted pyramid struture with a lede, nut graf, body, and tail or kicker.

To write the narrative, we utilized the "setup-conflict-resolution" approach and modified "martini glass" approach. Our setup establishes the Columbia River Gorge region as a popular area for recreation. The conflict centers around the Eagle Creek Fire and what ended up happening to visitation trends in the area after the fire occurred. Our conflict is where we modified the martini glass, and we put exploratory interaction in the middle of the story to let readers explore the conflict themselves. Ultimately, we resolve by finding that overall visits did decline in the region relative to the most recent pre-fire numbers, but many visitors did return. Many trails that were less popular before the fire ended up seeing increases in visits, as visitors found new places to visit when faced with trail closures. 

### Design Alternatives 

Please include the design alternatives you considered and why you did not pursue them further

#### Map and line chart

Our geographic visualization has some limitations; when we use the trail outlines to depict each trail it can be hard to see some of the smaller trails. We considered dropping the trail outline and instead using circles to convey the general location of a trail (potentially also with size of the circles encoding visits). This could help us see the small but very popular trails better (like Latourell Falls). Ultimately, we decided that it was worthwhile to include the geojson visualization of the trail shapes, but this would be a worthy alternative road to go down in the future. Visualizing geographic information can be complex so it is worth trying out several other options!

#### Seasonality

We explored some other ways of depicting seasonality in addition to the heatmaps. One option was a line chart where either years or months were across the x-axis, visits on the y-axis, and line color encoding either year or months (whichever was not on the x-axis). Ultimately, we decided that the heatmaps were a more effective way of conveying this information because there was no chance of overplotting; the lines overlapped while the heat map squares did not have the same issue. We felt that the heatmaps provided an intuitive way of understanding seasonality across the year, and trends across the years. 

#### Visualizing model output

Another way we considered to visualize the model output was to display a static map that used color to encode the change, or percent change, in trail use between the pre-fire baseline and a set time period (i.e., 2018 vs. the baseline, or 2019 vs. the baseline). Ultimately, we decided that using a line graph to show monthly detail in these changes in visitors relative to the baseline was important. Rather than the more blunt single year-over-year metric, we wanted to convey the difference between post-fire visits and the predicted baseline based on the pre-fire data in each month, for each trail. We also thought that a line graph provided an intuitive way of immediately grasping whether visits for each trail were above or below the pre-fire levels. Therefore, we went with the line chart and the monthly detail rather than a static choropleth. 

## IV. Feedback

We worked to incorporate feedback from both the Outdoor R&D team and our peers; below are some key feedback points we discussed and how we responded to them.

| Feedback      | Outcome |
| ------------- | ----------- |
| Map needs more context | Added basemap |
| Difficult to distinguish between visit counts on map | Used sequential multi-hue scheme to improve visibility of different visit counts |
| Difficult to distinguish between trails when multiple are selected in line chart | Changed the grey coloring scheme for the lines to be a colorful scheme so that when multiple lines are selected, they are distinguishable even when overlapping |
| Convert “top # most popular trails” to a vertical slider | Vega-Lite limitations prevented us from addressing; we would need to switch to a more flexible visualization system like D3 to incorporate this feedback | 
| Alllow users to click lines on the chart (in addition to being able to click geographic shapes on the map) to highlight the trails they’re interested in. | We found this clunky and hard to use with the large number of trails we had; we did not implement this |
| Visualize how popularity rankings change over time | Added race chart and static rankings | 
| Visualize seasonality more effectively | Added heat map to show how seasonality varies across years and across trails | 

We also heard from multiple people that they loved our team name!

![ron swanson](https://preview.redd.it/id7cmo4t5qk31.png?auto=webp&s=55a2a88d2706eeb7e728cd9876156c5a529ce5d0)

## V. Takeaways 

A lesson for anyone trying to visualize complex data is to make sure you pick the right tool! We used Vega-Lite/Altair which allowed us to make complex visualizations in a relatively short amount of time. This was great, except we encountered some small limitations to customizability (e.g. it was non-trivial/impossible to make a slider vertical, and very challenging to make the basemap and plot the trails on it). If we were to continue this project and create a polished set of visualizations that will be used long-term, using something that allowed more granular control like D3.js could be worth exploring.

Utilizing concepts from outside the field of data visualization, like journalism, is key to communicating to a more general audience. Even with a really great set of visualizations, there are still communication barriers that can only be alleviated by pairing visualizations with a great narrative. This is especially true for our more general target audience, but also important for clear communication with researchers who have more subject matter expertise.

Feedback and communicating with your target audience is super crucial! We were able to get feedback from A3 peers and OutdoorRD researchers multiple times throughout the design process. Each time we got feedback, we were able to make significant improvements. Feedback not only directly gave us ideas, but it also inspired us to try out new directions we wouldn't have tried by ourselves! By communicating with OutdoorRD researchers, we were able to confirm that what we are creating is useful and ensure that we were actually answering the questions they are interested in.

## VI. Bibliography 

- Ghosh, Aparna. (2022). 'Narrative Visualization.' Lecture to CSE 512 course, University of Washington. https://courses.cs.washington.edu/courses/cse512/22sp/lectures/CSE512-NarrativeVisualization-Ghosh-spr22.pdf
- Hale, Jamie. (2021). 'Eagle Creek Trail reopens more than 3 years after Columbia Gorge fire.' The Oregonian: OregonLive. https://www.oregonlive.com/travel/2021/01/eagle-creek-trail-reopens-more-than-3-years-after-columbia-gorge-fire.html
- Mackinlay, Jock. (1986). Automating the design of graphical presentations. ACM Transactions on Graphics 5(2): 110-141. 
- Pesanti, Dameon. (2018). 'Hikers will need permits on weekends at Dog Mountain.' The Columbian. https://www.columbian.com/news/2018/mar/07/hikers-will-need-permits-on-weekends-at-dog-mountain/
- Ryan, Jim. (2017). 'By the numbers: A look back at the Eagle Creek Fire, 3 months later.' The Oregonian: OregonLive. https://www.oregonlive.com/wildfires/2017/12/by_the_numbers_a_look_back_at.html
- Tufte, Edward. (1983). The Visual Display of Quantitative Information. Cheshire, Connecticut: Graphics Press. 
- Wikipedia. (2022). Eagle Creek Fire. https://en.wikipedia.org/wiki/Eagle_Creek_Fire
- Wood, S. A., Winder, S. G., Lia, E. H., White, E. M., Crowley, C. S. L., & Milnor, A. A. (2020). Next-generation visitation models using social media to estimate recreation on public lands. Scientific Reports. https://www.outdoorrd.org/publication/wood2020/ 
- U.S. Forest Service. (2022a). Closure Update: Eagle Creek Fire. Hood River, OR: U.S. Forest Service, Columbia River Gorge National Scenic Area Office. https://www.fs.usda.gov/alerts/crgnsa/alerts-notices/?aid=63436- U.S. Forest Service. (2022b). Fire Management: Eagle Creek Fire Story and Data. Accessed June 5th, 2022. Hood River, OR: U.S. Forest Service, Columbia River Gorge National Scenic Area Office. https://www.fs.usda.gov/detailfull/crgnsa/fire/?cid=fseprd567631&width=full
- U.S. Forest Service (2021). 'FOREST ORDER NO. 06-22-01-22-07.' Hood River, OR: U.S. Forest Service, Columbia River Gorge National Scenic Area Office. https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fseprd1018664.pdf

## VII. Team contributions [TODO]

Megan Ebers: ~20 hours
- Created bar chart race
- Created static vis showing trail popularity for years pre/post fire
- Created static vis showing total visitors over time
- Updated various visualizations according to peer and OutdoorRD feedback
- Lead feedback meeting with OutdoorRD team
- Managed webpage construction
- Contributed to narrative structure and content

Elizabeth Pelletier: ~20 Hours
- Cleaned and merged in weather data
- Fit statistical model to predict trail visit counts and determined how to use this predictive model in our visualizations
- Produced prototype of visualization of model predictions - difference between actual and predicted visits post-fire
- Contributed to writing of narrative; collaborated on structuring narrative
- Created poster
- Contributed to final write-up in README

Dominick Ta: ~20 Hours
- Investigate viability of incorporating A3 feedback
- Contribute writing to narrative article + refactor web code
- Contribute to final writeup
- Create additional visualizations as needed for article
- Research Eagle Creek Fire + current updates
- Communicate and meet with researchers

Brett Wortzman: ~20 hours
- Conceptualized and built heatmaps
- After much troubleshooting, succeeded in adding basemap to interactive map/line chart visualization

