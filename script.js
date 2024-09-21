
var map = L.map('map', {
    center: [22.604964, 120.300476],
    zoom: 16
});
L.tileLayer('https://dmap.ncdr.nat.gov.tw/1109/map/', {
    attribution: '&copy; <a href="https://dmap.ncdr.nat.gov.tw/1109/map/">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById("Floodprevention").addEventListener("click", function() {
    window.location.href = "flood-prevention.html";  
});

document.getElementById("knowledge").addEventListener("click", function() {
    window.location.href = "knowledge.html";  
});


document.getElementById("goBackButton").addEventListener("click", function() {
      window.location.href = "index.html";
});

document.getElementById("SeeHistory").addEventListener("click", function() {
      window.location.href = "History.html";
});
