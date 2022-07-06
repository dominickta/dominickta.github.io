These datasets were created by Sama Winder, UW Outdoor R&D on 4/27/22.
www.outdoorrd.org

These data consists of estimates of the number of visits, by month, to
recreation trails in the Columbia River Gorge area that straddles the
Columbia River of Oregon and Washington.  Our data cover the period
September 2014 to August 2019.  The 41 trails in our study are in the
western Columbia River Gorge and in an area that experienced a large and
dramatic wildfire (the Eagle Creek Fire) in September 2017.  After the
wildfire, a subset of our study trails were closed for visitor safety--
some of those trails have re-opened.

EagleCreek_AOI.geojson shows the spatial footprint of the recreation sites.
Each polygon represents a single recreation destination in the region.
- siteid is the unique identifier that can be used to join this spatial data
  to the visitation estimates

monthly_vis_by_site_zeroed.csv contains visitation estimates and other info
  about the sites. Specifically:
- siteid: unique identifier
- Name: longer name of the site. Matches Name in geojson
- month: numeric month of the year (1 = Jan)
- year
- years_fire: Years pre- or post- fire on Sept 2, 2017. These years are Sept -
  Sept (eg Year -1 is Sept 2016 - Sept 2017). The year of the fire is Year 0.
- pre_post_fire: whether this specific month is before or after the fire.
- burned: Whether or not the site burned in Sept 2017. This variable does not
  vary by time
- closed_ever: Whether or not the site was ever closed in response to the fire.
  All sites that burned were closed, but some nearby sites also closed even if
  they did not burn.
- tot_vis: Outdoor R&D's estimate of total visitors to that site in that month.
  Created using a visitation model that incorporates social media data. More
  (high level) details at https://www.outdoorrd.org/research/howmany/
- closed_month: Whether the site was closed for the majority (3 or more weeks)
  of that month
- d2p: A date column that combines month and year. The 15th of the month was
  added for ease in plotting.
