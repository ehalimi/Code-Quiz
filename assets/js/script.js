var count = 75;
var scoreCount = [];
var startBtn = document.getElementById("start-Btn");
var userScore = document.getElementById("scores");
var timer = document.getElementById("timer");
var choice1 = document.getElementById("a");
var choice2 = document.getElementById("b");
var choice3 = document.getElementById("c");
var choice4 = document.getElementById("d");
var initials = document.getElementById("input");
var submitBtn = document.getElementById("submit");
var backBtn = document.getElementById("go-back");
var removeScores = document.getElementById("remove-scores");

startBtn.addEventListener("click", function() {
    var questionOne = document.getElementById("question-one");

    // if (questionOne.style.visibility === 'hidden'){
    //     questionOne.style.visibility = 'visible';
    // } else {
    //     questionOne.style.visibility = 'hidden';
    // }
    
    // if (questionOne.style.display === 'none'){
    //     questionOne.style.display = 'block';
    // } else {
    //     questionOne.style.display = 'none';
    // }

    startBtn = setInterval(function(){
        count -= 1;
        timer.textContent = count;
            if (count <= 0){
            clearInterval(startBtn);
            }
    }, 1000);
});

function showScore(num) {
    scoreCount === scoreCount + 10;
    if (scoreCount) {
        scoreCount = scoreCount + userScore;
    } else {
        !scoreCount;
    };
};

choice1.addEventListener("click", function(){
    count = count -10;
    alert("Wrong!");
});

choice2.addEventListener("click", function(){
    count = count -10;
    alert("Wrong!");
});

choice3.addEventListener("click", function(){
    count = count +10;
    alert("Correct!");
    count = userScore;
    console.log(scoreCount);
});

choice4.addEventListener("click", function() {
    count = count -10;
    alert("Wrong!");
});

submitBtn.addEventListener('click', function(){
    var currentSubmitBtn = document.getElementById("submit").value;
    if(localStorage.getItem("data") === null) {
        localStorage.setItem("data", "[]");
    };

    submitBtn = JSON.parse(localStorage.getItem('data'));
    submitBtn.push(currentSubmitBtn);
    localStorage.setItem("data", JSON.stringify(submitBtn));
});


