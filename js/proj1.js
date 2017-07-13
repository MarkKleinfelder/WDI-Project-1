window.onload = function ready(){
	console.log("WE'RE RUNNING JAVASCRIPT");
	//clearInterval(beginTimer);
	document.getElementById('resetButton').style.visibility = 'hidden';
	
};

//--------------------CHARACTER (QUESTION) GENERATOR--------------//

var char = "abcdefghijklmnopqrstuvwxyz1234567890";
var question = "";

function makeChar(){
  for(var i=0; i < char.length; i++){
  	question = char.charAt(Math.floor(Math.random()*char.length));
  }

}

//-------------PLAYER COUNTDOWN TIMER DISPLAYS---------------//

function countOne(){
	setTimeout(timerPOneReady,0)
	setTimeout(timerThree, 2000)
	setTimeout(timerTwo, 3000)
	setTimeout(timerOne, 4000)
	setTimeout(timerPOne, 5000)

}

function countTwo(){
	setTimeout(timerPTwoReady,0)
	setTimeout(timerThree, 2000)
	setTimeout(timerTwo, 3000)
	setTimeout(timerOne, 4000)
	setTimeout(timerPTwo, 5000)


}
//----ready message p1----//
function timerPOneReady(){
	document.getElementById('countDownDisplay').innerHTML = "PLAYER 1 READY";
}
//----ready message p2---//
function timerPTwoReady(){
	document.getElementById('countDownDisplay').innerHTML = "PLAYER 2 READY";
}

function timerThree(){
	document.getElementById('countDownDisplay').innerHTML = "3";
}

function timerTwo(){
	document.getElementById('countDownDisplay').innerHTML = "2";
}

function timerOne(){
	document.getElementById('countDownDisplay').innerHTML = "1";
}

//-----p1 start------//
function timerPOne(){
	document.getElementById('countDownDisplay').innerHTML = "DRAW!";
	pOneBegin();
  	document.getElementById('answerBox').focus();
  	}

//-------p2 start-----//
function timerPTwo(){
	document.getElementById('countDownDisplay').innerHTML = "DRAW!";
	pTwoBegin();
}


//--------------------START BUTTON---------------------------//

function gameStart(){
  document.getElementById('showQ').classList.toggle('hideMe',false);
  document.getElementById('showQTwo').classList.toggle('hideMe', false);
  document.getElementById('answerBox').classList.toggle('hideMe',false);
  document.getElementById('answerBoxTwo').classList.toggle('hideMe',false);
 
  countOne();
  document.getElementById('startButton').style.visibility = 'hidden';
};

//-------------------TRY AGAIN BUTTON APPEAR---------------------//
function resetButton(){
	document.getElementById('resetButton').style.visibility = 'visible';
}

//--------------------TRY AGAIN FUNCTION----------------------//
//function tryAgain(){
//	clear pOneTime
//	clear pOneTimer
//	clear pTwoTime
//	clear pTwoTimer
//	clear text fields
//

//}







//--------------------TURN START DELAY-----------------------------------//

function startDelay(){
	setTimeout(function(){
		pTwoBegin();
	}, 3000);
}

//--------------------PLAYER ONE BUTTONS AND SCORE-------------------------------//
var pOneScore = 0;
var pOneTime = 0;
var pOneTimer;

function pOneBegin(){
    setQ();
    pOneTimer = setInterval(function(){
      pOneTime++;
      document.getElementById('pOneTimer').innerHTML = pOneTime;
 }, 50);
}
function pOneStop(){
	clearInterval(pOneTimer);
	pOneScore += pOneTime;
	document.getElementById('pOneScore').innerHTML = pOneScore;
	console.log('button working');
	countTwo();
};


//-------------------PLAYER TWO BUTTONS AND SCORE-----------------------------------//

var pTwoScore = 0;
var pTwoTime = 0;
var pTwoTimer;

function pTwoBegin(){
	document.getElementById('answerBoxTwo').focus();
	setQTwo();
    pTwoTimer = setInterval(function(){
		pTwoTime++;
		document.getElementById('pTwoTimer').innerHTML = pTwoTime;
 }, 50);
}
function pTwoStop(){
	clearInterval(pTwoTimer);
	pTwoScore += pTwoTime;
	document.getElementById('pTwoScore').innerHTML = pTwoScore;
	document.getElementById('countDownDisplay').innerHTML = "";
	resetButton();
	console.log('button working');
};

//---------------------PLAYER ONE PLACES QUESTIONS IN BOX-------------------//

var pOneQ;

function setQ(){
	makeChar();
	pOneQ=question;
	document.getElementById('qBox').innerHTML = pOneQ;
	
};

//--------------------PLAYER ONE ANSWER CHECK--------------------------//


var answer = document.getElementById('answerBox');
var challenge = document.getElementById('qBox');

function checkAnswer(){
	console.log('checking answer. Thanks!');
	if(answer.value == pOneQ){
		console.log('Correct!');
		challenge.innerHTML = '';
		pOneStop();
		document.getElementById('answerBox').value = '';
		document.getElementById('countDownDisplay').value = '';

	}else{
		console.log('wrong');
		document.getElementById('answerBox').value = '';
	}
};


//-----------------PLAYER TWO PLACES QUESION IN BOX----------//

var pTwoQ;

function setQTwo(){
	makeChar();
	pTwoQ=question;
	document.getElementById('qBoxTwo').innerHTML = pTwoQ;
	
};





//---------------PLAYER 2 ANSWER CHECK----------------// 

var answerTwo = document.getElementById('answerBoxTwo');
var challengeTwo = document.getElementById('qBoxTwo');

function checkAnswerTwo(){
	console.log('checking answer 2. Thanks!');
	if(answerTwo.value == pTwoQ){
		console.log('P2 Correct!');
		challengeTwo.innerHTML = '';
		document.getElementById('answerBoxTwo').value = '';
		pTwoStop();
		document.getElementById('countDownDisplay').value = '';
		winState();

	}else{
		console.log('P2 wrong');
		document.getElementById('answerBoxTwo').value = '';
	}
};

//----------------WIN STATE-----------------//

function winState(){
	if(pOneScore < pTwoScore){
		document.getElementById("winner").innerHTML="PLAYER ONE WINS!";
		//----add game wins counter---//
	}else{
		document.getElementById("winner").innerHTML="PLAYER TWO WINS!";
		//----add game wins counter-----//

	}
}



