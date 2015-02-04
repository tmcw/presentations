import pprint
import json
import rasterio
from shapely.geometry import Polygon
from rasterio import features
from shapely.ops import cascaded_union

with rasterio.open('logo-bw.png') as src:
    blue = src.read_band(3)

mask = blue < 10
shapes = features.shapes(blue, mask=mask)

geojson = { "type": "FeatureCollection", "features": [] }

polygons = []

for shape in shapes:
    p = Polygon(shape[0]['coordinates'][0])
    polygons.append(p)

mega = cascaded_union(polygons)
