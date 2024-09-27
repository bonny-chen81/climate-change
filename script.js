//淹水潛勢圖
var map = L.map('map', {
    center: [22.604964, 120.300476],
    zoom: 16
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


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

document.addEventListener('DOMContentLoaded', function() {
    var seeHistoryBtn = document.getElementById("SeeHistory");
    if (seeHistoryBtn) {
        seeHistoryBtn.addEventListener("click", function() {
            console.log("click!"); // 當按下按鈕時在控制台顯示
            window.location.href = "History.html"; // 跳轉到歷史災情頁面
        });
    }
});
var quizBtn = document.getElementById("quiz");
if(quizBtn){
    quizBtn.addEventListener("click",function() {
        window.location.href = "quiz.html";
    });
}

