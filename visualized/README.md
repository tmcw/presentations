On November 8th, I'm presenting at the [Visualized Conference](http://visualized.com/).

This is my talk, as I create it. The tools are mainly [markdown](http://daringfireball.net/projects/markdown/) and
[Keynote](http://www.apple.com/iwork/keynote/) for the presentation part of it.

Things referred to:

* [running code](https://github.com/tmcw/running)
* [sometimemachine](https://github.com/tmcw/sometimemachine)
* [precise changeset animation](https://gist.github.com/3983441)

Tools used:

## Running Maps

The end product is a [TileMill](http://mapbox.com/tilemill/) map.

Graphs are made with [node-canvas](https://github.com/LearnBoost/node-canvas)
and nodejs.

Small multiples graphs are made using [this script](https://github.com/tmcw/running/blob/master/smallmultiples.js)
which feed off of the output of [tcx2geojson.py](https://github.com/tmcw/running/blob/master/tcx2geojson.py).

## Minute (keystrokes)

The minute visualizations are powered with data from [minute-agent](https://github.com/tmcw/minute-agent)
and visualization by scripts listed in its readme.
