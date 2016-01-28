-------------------------------------------------------------------------------

To be honest, I'm a programmer.

The main data that I create is typing - 7.8 million keystrokes so far,
in the last two hundred days. You can see changes in how committed I
am to waking up, and I can see changes in how much I sleep, but just
finding the gap between the last keystroke of the night and the first
of the morning. I'm connected to the network about eighteen hours a day.

But in the afternoon I run. Not at the marathon level, but at the level I
can confidently say it's running, not jogging. Washington, DC is supposedly
the second fittest city in the united states, a claim I won't try to
visualize, but by the number of silver-haired senator types who can beat
you on the trails, it's probably true.

Since 2008, I've been running a bit differently - I've been doing it with data.
It's one of those things that sounds futuristic and prototypical but ends
up just being a bit obtrusive.

My watch, which would look dorky on a normal person makes my dainty wrists
look even more wafer thin.

The heart-rate monitor I wear is the old-fashioned
kind, the kind that's actually pretty close to your heart.

And all of this, of course, has an old-fashioned 'dock' that syncs to
my computer. And a wall charger, since the charge only lasts an hour or two.

But it makes data. So far, 143 runs. It's 500 miles, which makes 33
megabytes.

And so I started spending my mornings making something out of that.
The first challenge was just getting the data, that was locked up in a
website without export. And then there was the classic question of what
you want to show.

This is what I came up with.

-------------------------------------------------------------------------------

I've kind of fallen in love with this data.
It's genuinely multidimensional - every trackpoint
records altitude, position, heart rate, speed, direction, and all of
their derivatives. At all of 53,000 recorded points.

It fits neatly into the problem of simply running out of dimensions,
especially when, in the most familiar visualization, you've already spent
two just to replicate position.

And so this is one of many ways to attack the problem; it might be familiar
because it echoes the visual language of Minard's Napoleon's March to Moscow.
Which will be familiar if you've ever been to a talk by Tufte - I've heard
he hands it out.

But it's not very familiar in technology - there's actually very little support
for variably-sized lines, so a lot of things were built from the ground up.

The width of the path is my heart-rate, and so is the color. The elevation
of the city is visible by the strong lines north-south and weaker ones
east-west.

Unfortunately, it's not a very good training regimen - this year has corrected
that a bit.

-------------------------------------------------------------------------------

But I think the most important thing is this.

What this is, and I'll readily admit that it's a pretty standard tree layout, is me
as the blue dot. That blue dot is me at a coffee shop writing code to make
it possible to visualize some runs.

It was no great achievement of computer science, but it was a useful thing,
and so I published it, along with all of the code I used to make my running
maps.

The dots to the left are other people. After publishing the script, ten
other people made little tweaks to it. At one point the website changed a
little bit and the script stopped working, and the user `gljeremy` fixed it,
or the actually the version that he has copied from a second generation
of the script.
And so now his version is the one to use - even Google knows to find it
instead of the beginning.

I'm not really sure what people are doing with it. I know that some have used
it for visualizations - though I can't claim credit for anything that
happens on the internet, there are many more running maps being made
with the same open-source software. Some people are probably switching services
by exporting and importing. Some people are probably just
archiving what they do in case the service goes away.

-------------------------------------------------------------------------------

A few months later, the maps that we were making were seen, on a massive scale.
Foursquare flipped a switch and all of the maps on their website had our
roads.

It wasn't a perfect launch.

Within a few hours, we had reports from Brazil, Indonesia, and quite a few
places that Google Translate failed on that there were people, and there
were shopping malls, bars, and colleges, but no roads below them.

And it was kind of back to the same challenge - we started small to see
how the falloff of people corresponded, or didn't correspond, to the falloff
of roads.

But it quickly gained in scale. This is a map of a map - in short, it shows
where map is, and where it isn't. Worldwide street maps
are actually three-dimensional trees
of detail that inhabit billions of tiles and terabytes of storage -
they're never seen all at once.
But this peers down on each tile pyramid, adds it up, and shows how much data
is there. Just arteries in South America and Africa, interstates pushing across
the center of the United States. While it shows something a bit different,
Fathom's 'All Streets' map, which shows all streets in the US was a major
inspiration.

-------------------------------------------------------------------------------


# TODO

* Photo of watch
* watch plugged into computer
* wrist
* empty road in brazil
* source code?
* more of a source tree with people trying things out
* the bboxes map with me colored in
* openstreetmap's first years, possibly animated
* some kind of difference map between checkins and roads

# Snippets

Even in a position of editing source material and changing it for everyone else,
it still took a long time to get over the belief that there was a line between
personal data that began to exist and things that we believe are permanent.

But this isn't data on the map - it's the process. These are edits to the
map, and it's strikingly personal - embarrassingly personal in my case.

Open

And so I started looking at everything that had been added to the map, the
entry point for each street, house, and telephone pole on the map.

## Slide (Zoom into Africa)

When it completed, I was astounded, and to be honest scared. Some things I
expected - strong boxes in Canada from where super high quality
forest data was added, and of course completely opaque areas in Europe from
the most eager users.

But, in Africa there was a huge square. My mind snapped back to 2009, when I
had a fresh drivers license and an internship and was tasked with importing
thousands of miles of roads from Africover, derived from satellites and cars
and free for everyone. It was a long process with a lot of retries, and early
in the OpenStreetMap project nobody really knew how to put it on the map.

And so, I did, and now I have a messy fingerprint on this little part of the
history of maps.
