var quiz = document.getElementById("Quiz")
var questionPrompt = document.getElementById("question")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var beginbtn = document.getElementById("beginbtn")
var time = document.getElementById("timer")
var startScreen = document.getElementById("startScreen")

var question = ["This is queston #1", "This is queston #2", "This is queston #3", "This is queston #4", "This is queston #5"]
var right = ["right #1", "right #2", "right #3", "right #4", "right #5"]
var wrong = [question1,question2,question3,question4,question5]
var question1 = ["Wrong#1", "Wrong#1", "Wrong#1"]
var question2 = ["Wrong#2", "Wrong#2", "Wrong#2"]
var question3 = ["Wrong#3", "Wrong#3", "Wrong#3",]
var question4 = ["Wrong#4", "Wrong#4", "Wrong#4"]
var question5 = ["Wrong#5", "Wrong#5", "Wrong#5"]

beginbtn.addEventListener("click", function () {
    startScreen.setAttribute("class", "hide")
    quiz.setAttribute("class", "show")

    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        time.textContent = timeLeft + " seconds remaining";
        timeLeft--;
        test()

        if (timeLeft === 0) {
            time.textContent = timeLeft + " seconds remaining";
            clearInterval(timeInterval);
        }

    }, 1000);

    function test(){
        questionPrompt.textContent = question[0]
        btn1.textContent = right[0]
        btn2.textContent = question1[0]
        btn3.textContent = question1[2]
        btn4.textContent = question1[1]
        if(btn2 || btn3 || btn4 ){
            timeLeft -= 5
        }
        
    }







});

var press1 = btn1.addEventListener("click", function(){})
