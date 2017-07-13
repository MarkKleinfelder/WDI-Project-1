window.onload = function ready(){
	console.log("WE'RE RUNNING JAVASCRIPT");
	//clearInterval(beginTimer);
	//document.getElementById('resetButton').style.visibility = 'hidden';
	
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
//----ready message p1----//**changed from countDownDisplay to 'winner'**//
function timerPOneReady(){
	document.getElementById('winner').innerHTML = "PLAYER 1 READY";
}
//----ready message p2---//
function timerPTwoReady(){
	document.getElementById('winner').innerHTML = "PLAYER 2 READY";
}

function timerThree(){
	document.getElementById('winner').innerHTML = "3";
}

function timerTwo(){
	document.getElementById('winner').innerHTML = "2";
}

function timerOne(){
	document.getElementById('winner').innerHTML = "1";
}

//-----p1 start------//
function timerPOne(){
	document.getElementById('winner').innerHTML = "DRAW!";
	pOneBegin();
  	document.getElementById('answerBox').focus();
  	}

//-------p2 start-----//
function timerPTwo(){
	document.getElementById('winner').innerHTML = "DRAW!";
	pTwoBegin();
}


//--------------------START BUTTON---------------------------//

function gameStart(){
  //document.getElementById('showQ').classList.toggle('hideMe',false);
  //document.getElementById('showQTwo').classList.toggle('hideMe', false);
 //* document.getElementById('answerBox').classList.toggle('hideMe',false);
 //* document.getElementById('answerBoxTwo').classList.toggle('hideMe',false);
 
  countOne();
  document.getElementById('startButton').style.visibility = 'hidden';
};

//-------------------TRY AGAIN BUTTON APPEAR---------------------//
function resetButton(){
	document.getElementById('resetButton').style.visibility = 'visible';
}

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
	document.getElementById('winner').innerHTML = "";
	//resetButton();
	//countOne();
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
		document.getElementById('winner').value = '';

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
	document.getElementById('qBox').innerHTML = pTwoQ;	//<---changed from qBoxTwo--//
};



//---------------PLAYER 2 ANSWER CHECK----------------// 

var answerTwo = document.getElementById('answerBoxTwo');
var challengeTwo = document.getElementById('qBox'); //<---changed from qBoxTwo---//

function checkAnswerTwo(){
	console.log('checking answer 2. Thanks!');
	if(answerTwo.value == pTwoQ){
		console.log('P2 Correct!');
		challengeTwo.innerHTML = '';
		document.getElementById('answerBoxTwo').value = '';
		pTwoStop();
		document.getElementById('winner').value = '';
		winState();

	}else{
		console.log('P2 wrong');
		document.getElementById('winner').value = '';
	}
};

//----------------WIN STATE-----------------//

var pOneRounds = 0;
var pTwoRounds = 0;
var totalRounds = 0;

function winState(){
	 if(pOneTime < pTwoTime){
		document.getElementById("winner").innerHTML="PLAYER ONE WINS ROUND!";
		pOneRounds += 1;
		totalRounds = pOneRounds + pTwoRounds;
		document.getElementById('pOneRounds').innerHTML= pOneRounds;
		setTimeout(function(){
    		document.getElementById('pOneTimer').innerHTML = '';
			document.getElementById('pTwoTimer').innerHTML = '';
			pOneTime = 0;
			pTwoTime = 0;
			document.getElementById('winner').innerHTML='';
			
    	}, 2000);
	    }else{
		  document.getElementById("winner").innerHTML="PLAYER TWO WINS ROUND!";
		  pTwoRounds += 1;
		  totalRounds = pOneRounds + pTwoRounds;
    	  document.getElementById("pTwoRounds").innerHTML=pTwoRounds;
    	  setTimeout(function(){
    		  document.getElementById('pOneTimer').innerHTML = '';
			  document.getElementById('pTwoTimer').innerHTML = '';
			  pOneTime = 0;
			  pTwoTime = 0;
			  document.getElementById('winner').innerHTML='';

    	  }, 2000);
      
      }if(totalRounds === 5){ //----checks game over condition---//
      	 document.getElementById('pOneTimer').innerHTML = '';
	     document.getElementById('pTwoTimer').innerHTML = '';
			  pOneTime = 0;
			  pTwoTime = 0;
		gameOver();

   }else if (totalRounds < 5){
   	countOne();
   }


}

function gameOver(){
	resetButton();
	if(pOneRounds > pTwoRounds){
		document.getElementById("winner").innerHTML="PLAYER ONE WINS GAME!";
	}else{
		document.getElementById("winner").innerHTML="PLAYER TWO WINS GAME!";
	}
}


//--------------------TRY AGAIN FUNCTION----------------------//
function tryAgain(){
	//document.getElementById('pOneTimer').innerHTML = '';
	document.getElementById('pOneScore').innerHTML = '';
	document.getElementById('pOneWins').innerHTML = '';
	pOneScore = 0;
	pOneRounds = 0;
	//pOneTime = 0;
	
	//document.getElementById('pTwoTimer').innerHTML = '';
	document.getElementById('pTwoScore').innerHTML = '';
	document.getElementById('pTwoWins').innerHTML = '';
	pTwoScore=0;
	pTwoRounds=0;
	//pTwoTime = 0;
	totalRounds = 0;

	document.getElementById('winner').innerHTML='';
	document.getElementById('resetButton').style.visibility = 'hidden';
	document.getElementById('startButton').style.visibility = 'visible';
}


