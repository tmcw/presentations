var fs = require('fs'),
    turf = require('turf');

fs.writeFileSync('turf-convex.geojson', JSON.stringify(turf.convex(JSON.parse(fs.readFileSync('./turf-2.geojson'))), null, 2));
