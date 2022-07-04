var count = 75;
var scoreCount = [];
var startBtn = document.getElementById("start-Btn");
var userScore = document.getElementById("scores");
var timer = document.getElementById("timer");
var choice1a = document.getElementById("q1a");
var choice1b = document.getElementById("q1b");
var choice1c = document.getElementById("q1c");
var choice1d = document.getElementById("q1d");
var choice2a = document.getElementById("q2a");
var choice2b = document.getElementById("q2b");
var choice2c = document.getElementById("q2c");
var choice2d = document.getElementById("q2d");
var choice3a = document.getElementById("q3a");
var choice3b = document.getElementById("q3b");
var choice3c = document.getElementById("q3c");
var choice3d = document.getElementById("q3d");
var choice4a = document.getElementById("q4a");
var choice4b = document.getElementById("q4b");
var choice4c = document.getElementById("q4c");
var choice4d = document.getElementById("q4d");
var choice5a = document.getElementById("q5a");
var choice5b = document.getElementById("q5b");
var choice5c = document.getElementById("q5c");
var choice5d = document.getElementById("q5d");
var initials = document.getElementById("input");
var submitBtn = document.getElementById("submit");
var backBtn = document.getElementById("go-back");
var removeScores = document.getElementById("remove-scores");
var intro = document.getElementById("intro");
var initials = document.getElementById("text");
var questionOne = document.getElementById("question-one");
var questionTwo = document.getElementById("question-two");
var questionThree = document.getElementById("question-three");
var questionFour = document.getElementById("question-four");
var questionFive = document.getElementById("question-five");




startBtn.addEventListener("click", function() {
    // console.log("start button is working");
    // var questionTwo = document.getElementById("question-two");

    // if (questionOne.style.visibility === 'hidden'){
    //     questionOne.style.visibility = 'visible';
    // } else {
    //     questionOne.style.visibility = 'hidden';
    // }
    // document.querySelector(".content").style.display = 'block';

    
    // if (questionOne.style.display === 'none'){
    //     questionOne.style.display = 'block';
    // } else {
    //     questionOne.style.display = 'none';
    // }
    // questionOne.setAttribute("style", "display: block");
    // questionOne.classList.remove("content");
    intro.setAttribute("style", "display: none");

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

choice1a.addEventListener("click", function(){
    count = count -10;
    alert("Wrong!");
    questionOne.setAttribute("style", "display: none");
});

choice1b.addEventListener("click", function(){
    questionOne.setAttribute("style", "display: none");
    count = count -10;
    alert("Wrong!");
});

choice1c.addEventListener("click", function(){
    questionOne.setAttribute("style", "display: none");
    count = count +10;
    alert("Correct!");
    count = userScore;
    console.log(scoreCount);
});

choice1d.addEventListener("click", function() {
    questionOne.setAttribute("style", "display: none");
    count = count -10;
    alert("Wrong!");
});

choice2a.addEventListener("click", function(){
    count = count -10;
    alert("Wrong!");
    questionTwo.setAttribute("style", "display: none");
});

choice2b.addEventListener("click", function(){
    questionTwo.setAttribute("style", "display: none");
    count = count -10;
    alert("Wrong!");
});

choice2c.addEventListener("click", function(){
    questionTwo.setAttribute("style", "display: none");
    count = count +10;
    alert("Correct!");
    count = userScore;
    console.log(scoreCount);
});

choice2d.addEventListener("click", function() {
    questionTwo.setAttribute("style", "display: none");
    count = count -10;
    alert("Wrong!");
});

choice3a.addEventListener("click", function(){
    count = count -10;
    alert("Wrong!");
    questionThree.setAttribute("style", "display: none");
});

choice3b.addEventListener("click", function(){
    questionThree.setAttribute("style", "display: none");
    count = count -10;
    alert("Wrong!");
});

choice3c.addEventListener("click", function(){
    questionThree.setAttribute("style", "display: none");
    count = count +10;
    alert("Correct!");
    count = userScore;
    console.log(scoreCount);
});

choice3d.addEventListener("click", function() {
    questionThree.setAttribute("style", "display: none");
    count = count -10;
    alert("Wrong!");
});

choice4a.addEventListener("click", function(){
    count = count -10;
    alert("Wrong!");
    questionFour.setAttribute("style", "display: none");
});

choice4b.addEventListener("click", function(){
    questionFour.setAttribute("style", "display: none");
    count = count -10;
    alert("Wrong!");
});

choice4c.addEventListener("click", function(){
    questionFour.setAttribute("style", "display: none");
    count = count +10;
    alert("Correct!");
    count = userScore;
    console.log(scoreCount);
});

choice4d.addEventListener("click", function() {
    questionFour.setAttribute("style", "display: none");
    count = count -10;
    alert("Wrong!");
});

choice5a.addEventListener("click", function(){
    count = count -10;
    alert("Wrong!");
    questionFive.setAttribute("style", "display: none");
});

choice5b.addEventListener("click", function(){
    questionFive.setAttribute("style", "display: none");
    count = count -10;
    alert("Wrong!");
});

choice5c.addEventListener("click", function(){
    questionFive.setAttribute("style", "display: none");
    count = count +10;
    alert("Correct!");
    count = userScore;
    console.log(scoreCount);
});

choice5d.addEventListener("click", function() {
    questionFive.setAttribute("style", "display: none");
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


