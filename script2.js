


//按鈕區

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

//document.getElementById("goBackButton").addEventListener("click", function() {
 //     window.location.href = "index.html";
//});

//document.getElementById("SeeHistory").addEventListener("click", function() {

//      window.location.href = "History.html";
//});
