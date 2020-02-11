var start = document.getElementById("start")
var ques1 = document.getElementById("question1")
var ques2 = document.getElementById("question2")
var ques3 = document.getElementById("question3")
var ques4 = document.getElementById("question4")
var ques5 = document.getElementById("question5")
var wrongbtn = document.getElementsByClassName("wrong")
var rightbtn = document.getElementsByClassName("right")
var beginbtn = document.getElementsByClassName("begin")
var timer = document.getElementsByClassName("timer")
var score = 0
var timeleft = 30

if(timeleft = 0){
    ques1.setAttribute("display","none")
}

beginbtn.addEventListener("click", function(){

    start.setAttribute("display", "none")
    ques1.setAttribute("display", "active")

})
