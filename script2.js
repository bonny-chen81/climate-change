


//按鈕區
var floodPreventionBtn = document.getElementById("Floodprevention");
if (floodPreventionBtn) {
    floodPreventionBtn.addEventListener("click", function() {
        window.location.href = "flood-prevention.html";  
    });
}

var knowledgeBtn = document.getElementById("knowledge");
if (knowledgeBtn) {
    knowledgeBtn.addEventListener("click", function() {
        window.location.href = "knowledge.html";  
    });
}

var goBackButton = document.getElementById("goBackButton");
if (goBackButton) {
    goBackButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

var seeHistoryBtn = document.getElementById("SeeHistory");
if (seeHistoryBtn) {
    seeHistoryBtn.addEventListener("click", function() {
        console.log("click!");
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
