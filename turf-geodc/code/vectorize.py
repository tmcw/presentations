import pprint
import json
import rasterio
from shapely.geometry import Polygon
from rasterio import features

with rasterio.open('logo-bw.png') as src:
    blue = src.read_band(3)

mask = blue < 10
shapes = features.shapes(blue, mask=mask)

geojson = { "type": "FeatureCollection", "features": [] }

for shape in shapes:
    p = Polygon(shape[0]['coordinates'][0])
    if p.area > 100:
        geojson["features"].append({
            "type": "Feature",
            "geometry": shape[0]
        })

print json.dumps(geojson)
