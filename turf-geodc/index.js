var turf = require('turf');
var map = L.map('map', {
    zoomControl: false,
    crs: L.CRS.Simple,
    scrollWheelZoom: false
}).setView([0, 0], 0);

map.attributionControl.setPrefix('');

var theLayer = L.layerGroup().addTo(map);

function color() {
    return randomColor({
        luminosity: 'light'
    });
}

var options = [
    {
        name: 'Original',
        data: logo,
        color: color()
    },
    {
        name: 'Envelope',
        data: turf.envelope(logo),
        color: color()
    },
    {
        name: 'Center',
        data: turf.center(logo),
        color: color()
    },
    {
        name: 'Explode',
        data: turf.explode(logo),
        color: color()
    },
    {
        name: 'TIN',
        data: turf.tin(turf.explode(logo)),
        color: color()
    },
    {
        name: 'Convex',
        data: turf.convex(logo),
        color: color()
    },
    {
        name: 'Flip',
        data: turf.flip(logo),
        color: color()
    },
    {
        name: 'Random',
        data: turf.random('points', 50),
        color: color()
    },
    {
        name: 'Hex',
        data: turf.hex(turf.extent(logo), 10),
        color: color()
    },
    {
        name: 'Hex-Count',
        data: turf.count(turf.hex(turf.extent(logo), 10), turf.explode(logo), 'count'),
        color: color()
    }
];

var optionsDiv = document.getElementById('options');

options.forEach(function(o) {
    var link = optionsDiv.appendChild(document.createElement('a'));
    link.innerHTML = o.name;
    link.style.background = o.color;
    link.onclick = function() {
        selectData(o.data);
        togglePanel();
    };
});

function selectData(data) {
    theLayer.clearLayers();
    var added = L.geoJson(data, {
        style: function (feature) {
            if (feature.properties && feature.properties.count !== undefined) {
                return {
                    fillColor: '#fff',
                    fillOpacity: feature.properties.count / 10,
                    weight: 1,
                    opacity: 2,
                    color: '#000'
                };
            } else {
                return {
                    fillColor: '#fff',
                    fillOpacity: 0.9,
                    weight: 5,
                    opacity: 2,
                    color: '#000'
                };
            }
        },
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
              radius: 10,
              fill: '#fff',
              stroke: true,
              color: '#000',
              opacity: 1,
              weight: 3,
              fillOpacity: 1
            });
        }
    })
    .addTo(theLayer);
}

selectData(options[0].data);

document.addEventListener('keydown', function(e) {
    if (e.which === 84) togglePanel();
});
function togglePanel(e) {
    if (document.getElementById('options').className != 'show') {
        document.getElementById('options').className = 'show';
    } else {
        document.getElementById('options').className = '';
    }
}


map.fitBounds(theLayer.getLayers()[0].getBounds());
