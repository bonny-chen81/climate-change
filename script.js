
var map = L.map('map', {
    center: [22.604964, 120.300476],
    zoom: 16
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var floodPreventionBtn = document.getElementById("Floodprevention");
if (floodPreventionBtn) {
    floodPreventionBtn.addEventListener("click", function() {
        window.location.href = "flood-prevention.html";  
    });
}

// Functionality for Knowledge button
var knowledgeBtn = document.getElementById("knowledge");
if (knowledgeBtn) {
    knowledgeBtn.addEventListener("click", function() {
        window.location.href = "knowledge.html";  
    });
}

// Functionality for Go Back button
var goBackButton = document.getElementById("goBackButton");
if (goBackButton) {
    goBackButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

// Functionality for See History button
var seeHistoryBtn = document.getElementById("SeeHistory");
if (seeHistoryBtn) {
    seeHistoryBtn.addEventListener("click", function() {
        window.location.href = "History.html";
    });
}
//document.getElementById("Floodprevention").addEventListener("click", function() {
   // window.location.href = "flood-prevention.html";  
//});

//document.getElementById("knowledge").addEventListener("click", function() {
//    window.location.href = "knowledge.html";  
//});


//document.getElementById("goBackButton").addEventListener("click", function() {
 //     window.location.href = "index.html";
//});

//document.getElementById("SeeHistory").addEventListener("click", function() {
//      window.location.href = "History.html";
//});
