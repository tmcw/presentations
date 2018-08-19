# PPOL 646

# Lecture

**What are maps, and when should you use them to analyze or support a theory?**

Maps are a specific kind of visualization, but they share all of the same visual principles as non-geographic charts and we can think of them in the same framework.

A basic understanding of charts can be built on encodings:


* Area
* Color
* Time
* Direction
* Position

At least in my mind, the fundamental encoding in maps is **area**: the world is fundamentally a shape with area, and you make maps by warping the earth's surface onto something flat, like a screen.

The astute listener will notice that we've already mentioned the most pedantically interesting and potentially misleading thing about maps: turning a round 3D earth into something you can put onto a piece of paper is not a perfect process. Just like trying to make a basketball perfectly flat, or more gruesomely, a bear rug, the only way to turn curved 3D things into 2D things is by warping and distorting them.

The result is what cartographers call **projections**, which are specific compromises between the different things you can preserve about the world - **direction, area, distance**.

But, to me, this isn't the most interesting problem of maps, and I don't think it should be to you either, unless you happen to be managing a very large and very northern country.

The problem with geography is that **it already exists in space and already has shape**. As opposed to indicators like mortality or economy, there's an implicit assumption that, given a list of GDP per country, the physical shape of the country matters. Sometimes it matters, sometimes it matters in an indirect way - relating not to land area but another geography - and sometimes it entirely doesn't, and you need to use a table instead.

A few basic examples of when maps _aren't right.__ 
* Listing countries by area - this is just re-encoding something the map already has. Use a list so that you visualize order
* Visualizing indicators over time - since maps already consume one of your signals - area - there's are few other channels left to deliver more complex data.

When maps _are right_, the question of how to encode your data remains. Map encodings fall into several types that are very different - using one for an incorrect kind of data will lead you into very rough territory.

The first question to ask isn't what visual appearance you desire, but what kind of data you have:

1. Absolute values: these are values that theoretically **start at zero** and represent **additive** trends. For instance, the total population of a place, or the number of murders in a precinct.
2. Values relative to geography: flu cases per resident, or percentage of urban ground that is permeable
3. Values relative to a non-geographical factor: for instance, interest rate, which is just relative to itself

Things to notice: the first two are convertible: divide an absolute value by a geographical factor or multiply a relative value, and you're in the other place.

Now that we've categorized our data, let's talk visualization. I like to think of it this way:

* Absolute values are **on the map**
* Relative values are **in the map**

The encodings that you'll choose for absolute values, like scaled circles, height encoding, bar charts if you must - are **on the map**. They are placed in the right position but otherwise do not occupy the area of the thing that they represent.

The encodings that are appropriate for relative values, like choropleths, are **in the map**. They occupy the geographical shape of the things that they represent.

Before diving into the **actually doing it** portion, let's talk about encodings that you should know about, are very useful for public policy, but aren't as common.

* Dot density, especially multivariate dot density
* Heatmaps
* Binned data

# TileMill

Sources:

* [Chartjunk](http://www.businessinsider.com/the-27-worst-charts-of-all-time-2013-6?op=1)
* [Understanding pie charts](http://eagereyes.org/techniques/pie-charts)
* [Bad choropleth example](http://support.sas.com/documentation/cdl/en/graphref/63022/HTML/default/viewer.htm#overview-gmap.htm)
* [second bad choropleth example](http://cartonerd.blogspot.com/2013_12_01_archive.html)
* [rainbow example](http://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/)
* [red-green colorblind example](http://www.xocas.com/blog/en/ubersimple-tutorial-a-choropleth-in-qgis/)
