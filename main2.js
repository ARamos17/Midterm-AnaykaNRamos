function check(){
alert("Good Job!")
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var correct = 0;

if (question1) == "The refrigerator was empty/El refrigerador estaba vacío"){
  correct++;

}
if(question2 == "Fruits and Vegetables/Frutas y Vegetales"){
  correct++;
}


document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got  " + correct + "  correct.";
