var quiz1 = document.getElementById("Quiz1")
var quiz2 = document.getElementById("Quiz2")
var quiz3 = document.getElementById("Quiz3")
var quiz4 = document.getElementById("Quiz4")
var quiz5 = document.getElementById("Quiz5")
var btn1 = document.getElementsByClassName("btn1")
var btn2 = document.getElementsByClassName("btn2")
var btn3 = document.getElementsByClassName("btn3")
var btn4 = document.getElementsByClassName("btn4")
var beginbtn = document.getElementById("beginbtn")
var time = document.getElementById("timer")
var startScreen = document.getElementById("startScreen")
var scoreScreen = document.getElementById("scoreScreen")
var submitbtn = document.getElementById("submit")



beginbtn.addEventListener("click", function () {
    startScreen.setAttribute("class", "hide")
    quiz1.setAttribute("class", "show")

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








});
function test() {

    if (press1 || press2 || press3) {
        timeLeft -= 5
        quiz1.setAttribute("class", "hide")
        quiz2.setAttribute("class", "show")
    }

    if (press1 || press3 || press4) {
        timeLeft -= 5
        quiz2.setAttribute("class", "hide")
        quiz3.setAttribute("class", "show")
    }
    if (press1 || press3 || press4) {
        timeLeft -= 5
        quiz3.setAttribute("class", "hide")
        quiz4.setAttribute("class", "show")
    }
    if (press1 || press2 || press4) {
        timeLeft -= 5
        quiz4.setAttribute("class", "hide")
        quiz5.setAttribute("class", "show")
    }
    if (press2 || press3 || press4) {
        timeLeft -= 5
        quiz5.setAttribute("class", "hide")
        results.setAttribute("class", "show")
    }


}
btn1.addEventListener("click", press1());
btn2.addEventListener("click", press2());
btn3.addEventListener("click", press3());
btn4.addEventListener("click", press4());

