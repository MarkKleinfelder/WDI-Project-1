window.onload = function ready(){
	console.log("WE'RE RUNNING JAVASCRIPT");
	//clearInterval(beginTimer);
};

//--------------------PLAYER ONE BUTTONS AND SCORE-------------------------------//
var pOneScore = 0;
var pOneTime = 0;
var pOneTimer;
function pOneBegin(){
 pOneTimer = setInterval(function(){
		pOneTime++;
		document.getElementById('pOneTimer').innerHTML = pOneTime;
 }, 100);
}
function pOneStop(){
	clearInterval(pOneTimer);
	pOneScore =pOneTime;
	document.getElementById('pOneScore').innerHTML = pOneScore;
	console.log('button working');
};
//-------------------PLAYER TWO BUTTONS AND SCORE-----------------------------------//

var pTwoScore = 0;
var pTwoTime = 0;
var pTwoTimer;
function pTwoBegin(){
 pTwoTimer = setInterval(function(){
		pTwoTime++;
		document.getElementById('pTwoTimer').innerHTML = pTwoTime;
 }, 100);
}
function pTwoStop(){
	clearInterval(pTwoTimer);
	pTwoScore =pTwoTime;
	document.getElementById('pTwoScore').innerHTML = pTwoScore;
	console.log('button working');
};


 



//------------------------------PLACES QUESTIONS IN BOX-----------------------------//

var questionOne = ['q', 'u', 'e'];
var pOneQ;

function setQ(){
	pOneQ=questionOne[0];
	document.getElementById('qBox').innerHTML = pOneQ;
}

//--------------------------------------------------------------------------------//





/*
	pOneAns;

	function checkAnswer(){
	var pOneAns = document.getElementById('answer').value;

	console.log(pAnswer);
	if(answer.value == ''){
	alert('COMLETE THE CHALLENGE');
} else if{
	alert("Well Done");
	answer.value = 'pOneQ[0]';

}	
};
*/

