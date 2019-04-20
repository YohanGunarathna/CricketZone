window.onload=timechecker;

var totalSeconds = 120;
var minutes= parseInt(totalSeconds/60);
var seconds = parseInt(totalSeconds%60);
var myTimer;

function timechecker(){
document.getElementById("timer_heading2").innerHTML = minutes + ' minutes : ' + seconds + ' seconds ' ;

if(totalSeconds <=0){
setTimeout('getScore()',1);
alert("Your times up");
window.location.reload();
document.getElementById("timer_heading2").innerHTML = "Time Up" ;
} 


else {
totalSeconds = totalSeconds -1;
minutes = parseInt(totalSeconds/60);
seconds = parseInt(totalSeconds%60);
myTimer=setTimeout("timechecker()",1000);


}

	
}






var Questions  =  10;
var Selections =  4;


var answers  = new Array(10);
answers[0]   = "6";
answers[1]   = "Leg Before Wicket";
answers[2]   = "5";
answers[3]   = "22 Yards";
answers[4]   = "India";
answers[5]   = "Muttiah Muralitharan";
answers[6]   = "India";
answers[7]   = "4";
answers[8]   = "2008";
answers[9]   = "Arjuna Ranatunga";

function getScore(form) {
  var marks = 0;
  var currentEliment;
  var currentSelection;
  var wrongAns = 0;
  var correctAns = 0;
  var ansString = "";
  
  
  for (i=0; i< Questions ; i++) {
    currentEliment = i*Selections;
    for (j=0; j<Selections; j++) {
      currentSelection = form.elements[currentEliment + j];
      if (currentSelection.checked) {
        if (currentSelection.value == answers[i]) {
		      
           correctAns++;
		   ansString +="Your answer " +"  " +  "  "  + currentSelection.value +"  "+" is Correct" + "<br>"+ "<br>" ;
          break;}

        else{
			wrongAns++;
			ansString += "Your answer " +"  " +  "  "  + currentSelection.value +"  "+" is Wrong" + "<br>"+ "<br>" ;
        }
        
        }
      }
    }

  marks = (correctAns*2)-(wrongAns*1);
 if (marks >= 0){
marks=marks;}
else
{
marks=0;
}



    if (marks < 10) {
        document.body.style.backgroundColor = "red";
        
    }else {
    document.body.style.backgroundColor = "blue";
}


  var correctAnswers = "";
  for (i=1; i<=Questions; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n" + "<br/>" + "<br/>";
  }
  
 document.getElementById("results").innerHTML +="Results :" + "<br>" + "<br>" + ansString+ "<br>" + "<br>" ;
  document.getElementById("results").innerHTML +="Correct Answers : " + "<br>" + correctAnswers + "<br>" + "<br>";
  document.getElementById("results").innerHTML += "Your Marks : " +  marks;
  
  
 } 



     