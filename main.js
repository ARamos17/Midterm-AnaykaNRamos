function check(){
alert("Good Job!");

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var correct = 0;

if (question1) == "Apple"){
  correct++;

}
if(question2 == "Orange") {
  correct++;

}
if(question3 == "Fruit") {
  correct++;

}
if(question4 == "Carrot") {
  correct++;

}
if(question5 == "Bread") {
  correct++;

}
if(question6 == "Table") {
  correct++;

}
if(question7 == "Dog") {
  correct++;

}
if(question8 == "Cat") {
  correct++;

}

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got  " + correct + "  correct.";




}
