let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.65310258792058, lng: -100.29139610922921 },
    zoom: 18,
    mapId:'19d44d248a609478'
  });
}
// Info de resis 25.65310258792058, -100.29139610922921

window.initMap = initMap;