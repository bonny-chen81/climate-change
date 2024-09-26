var goBackButton = document.getElementById("goBackButton");
if (goBackButton) {
    goBackButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

// 設置柱狀圖
const ctx = document.getElementById('floodBarChart').getContext('2d');
const floodBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['水利署淹水標準', '一個人的身高', '納莉颱風', '八二三水災'],
        datasets: [{
            label: '高度 (公分)',
            data: [27.5, 165, 230, 140],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: '高度 (公分)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: '事件'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: '歷史淹水災情'
            }
        }
    }
});

