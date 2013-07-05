building the iD map editor in d3 

And so _9 months_ ago we found ourselves in the position of building a new
map editor, in iD.

Map editors are relatively rare beasts: we can all think of Google Map Maker,
and there are a few alternatives built in Flash or Canvas, and so on, but
it's a surprisingly unresearched area.

They're difficult because they straddle the line between visual and semantic:
nearly the entire page is interactive and read/writable. The history of
those interactions matters, and objects on the map are inter-related in complex
and subtle ways.

It's a bit of a challenge.

The title of this talk is building iD in d3, and to be precise, it really is
_just building in d3_ - the problems we faced might push you to think of
Backbone, or jQuery, or Ember, or one of many, many options for MVC frameworks
and so on. And in comparison, d3 is usually seen as the generator of pretty,
interactive pictures - that its home base is an SVG element and its classic moves
are stuff like streamgraphs and chord diagrams.

But the truth is that tools tend to be more general than we think, and that
d3's a fairly clean abstraction for a wide range of problems, from map
editing, to building document browsers and much simpler things.
