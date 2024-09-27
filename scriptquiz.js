var goBackButton = document.getElementById("goBackButton");
if (goBackButton) {
    goBackButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

const quizContainer = document.getElementById('quiz-container'); // 新增這行
const questions = [
    {
        question: "1. 看到氣象預報說明天高機率會有大豪雨，你會有的反應是.......",
        answers: [
            { text: "a. 太好了！！立刻以下大雨造成不便為由，取消明天不想參加的所有活動。", score: 1 },
            { text: "b. 截圖氣象預報頁面傳給住附近的家人、朋友，提醒他沒事別出們喔～～", score: 2 },
            { text: "c. 可惡，下雨是不會選時間喔~~~~明天本來要出門的說(怒", score: 3 },
            { text: "d. 喔，真的喔，會下大雨欸。",score: 4}
        ]
    },
    {
        question: "2. 準備出門時，發現家門口淹水超過腳踝，你會......",
        answers: [
            { text: "a. 走過去啊，淹水了人生還是要過啊。", score: 4 },
            { text: "b. 心想：「為什麼又淹水，今天夏天幾百次了，每次都在淹欸。」然後繞路避開淹水的地方。", score: 3 },
            { text: "c. 喔喔喔～～真的淹水了耶，趕快拍起來發限時動態。", score: 1 },
            { text: "d. 拍下來投書給各家媒體。", score: 2 },
        ]
    },
    {
        question: "3. 你最喜歡下雨哪一點？",
        answers: [
            { text: "a. 可以名正言順地待在家裡，也不會被別人說整天宅在家。", score: 1 },
            { text: "b. 啊不就高空水蒸氣凝結，我都還好。", score: 4 },
            { text: "c. 可以和喜歡的親朋好友共撐一把傘～～", score: 2 },
            { text: "d. 下雨就超級煩的啊，去哪裡都不方便，到底有甚麼好喜歡的？", score: 3 },
        ]
    },
    {
        question: "4. 平常我看氣象預報中的降雨機率是為了......",
        answers: [
            { text: "a. 看看今天需不需要帶雨具？", score: 2 },
            { text: "b. 增加一個今天聊天的話題（例如：欸，今天下午會下雨耶～）", score: 1 },
            { text: "c. 基本上降雨機率就是我的「每日運勢」，降雨機率和我的運氣成反比。", score: 3 },
            { text: "d. 通常只是剛好滑到就看一下。", score: 4 },
        ]
    },
    {
        question: "5. 看到新聞報導他國淹水災情嚴重，我會的反應是......",
        answers: [
            { text: "a. 在社群軟體上轉發相關新聞，為當地居民祈福?", score: 2 },
            { text: "b. 竟然有人運氣比我更差，突然發現我們這邊的雨好像還好", score: 3 },
            { text: "c. 天哪~那個被沖走的冰箱裡有好多我喜歡的食物", score: 4 },
            { text: "d. 往好處想，雖然水災很可怕，但他們短期間內可能不會缺水吧", score: 1 },
        ]
    },
    {
        question: "6. 我喜歡甚麼樣的雨傘?",
        answers: [
            { text: "a. 透明的，可以從裡面看到一滴一滴的水珠打在傘面上。", score: 1 },
            { text: "b. 傘面很大的傘。", score: 2 },
            { text: "c. 好收納的摺疊傘。", score: 3 },
            { text: "d. 姑婆芋或任何雨傘我都可以。", score: 4 },
        ]
    },
    {
        question: "7. 剛出門時，聽到天空中傳來巨大的雷聲，但沒有下雨，我會......",
        answers: [
            { text: "a. 立刻衝回家拿雨傘。", score: 3 },
            { text: "b. 繼續走啊，不然會遲到。", score: 4 },
            { text: "c. 期待等一下天氣會變得涼快一點。", score: 1 },
            { text: "d. 看看在附近的朋友有沒有發下暴雨的限時動態，如過看到的話，幫他按愛心~~", score: 2 },
        ]
    },
];

let currentQuestionIndex = 0;
let totalScore = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    nextButton.style.display = 'none';
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.score));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(score) {
    totalScore += score;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultText.innerText = calculateResult(totalScore);
}

function calculateResult(score) {
    if (score >= 22) return "雨世無爭型:\n不管天氣變化多麼劇烈，都處之泰然，你都絲毫不受影響。對你來說，既然天氣已經遠超越了你的掌控，那也絕對不能讓天氣掌控你的人生啊～～";
    if (score >= 17) return "時不我雨型:\n降雨機率等於你今天倒楣的機率，雨每次的選在最不對的時機下下來，害你常常計畫被打亂，又淋雨淋成落湯雞。可是，只要你有帶傘出門，雨是一滴都不會掉下來的。";
    if (score >= 12) return "恫關在暴雨型:\n比起天氣，你更在乎身旁朋友的心情。你不害怕淹水，但你害怕被獨處時的孤獨感淹沒。下大雨的時候，只在乎要幫身旁的朋友撐傘，就算自己會因此全身濕也沒關係。"
    return "休戚雨共型:\n雨神就是你的守護神。沒有什麼煩惱，是一場痛快的陣雨不能解決的。雨水滋養了你，雨後的彩虹給你乏味的日子增添色彩。不論毛毛細雨或是豪雨特報，你都能快樂的與之共存。";
}

restartButton.addEventListener('click', startQuiz);
startQuiz();
