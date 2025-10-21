document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  const map = new ol.Map({
    target: 'map',
    layers: [ new ol.layer.Tile({ source: new ol.source.OSM() }) ],
    view: new ol.View({
      center: ol.proj.fromLonLat([32.8597, 39.9334]),
      zoom: 10
    })
  });

  const feature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([32.741, 39.871])),
    name: 'Hacettepe Üniversitesi'
  });
  const vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({ features: [feature] }),
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({ color: '#f107a3' }),
        stroke: new ol.style.Stroke({ color: '#7b2ff7', width: 2 })
      })
    })
  });
  map.addLayer(vectorLayer);
});
