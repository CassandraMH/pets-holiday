var mymap = L.map('mapid').setView([48.25133, 7.44890], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidXhpYW4iLCJhIjoiY2tvOXIwNTA3MWJtejJvcGRqZndvNXh4dSJ9.6FFbWI8b81_YT8_94cQWPA'
}).addTo(mymap);

var map = L.map("mapid", {
    center: new L.LatLng(48.25133, 7.44890),
    zoom: 5
});
