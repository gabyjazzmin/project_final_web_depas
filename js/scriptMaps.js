let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    mapId:'19d44d248a609478'
  });
}

window.initMap = initMap;