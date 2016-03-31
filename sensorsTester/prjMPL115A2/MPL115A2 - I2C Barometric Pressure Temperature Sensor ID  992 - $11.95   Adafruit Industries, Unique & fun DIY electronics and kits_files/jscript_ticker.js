ticker = 0;

function tickerFade()
{
	for( i = 0; i < 5; i++)
	{
		stringName = 'tickerText' + i ;
		document.getElementById(stringName).style.display = 'none';
	}

	tickerCycle();

}

function tickerCycle()
{
	fade(ticker);
	ticker++;
	ticker = ticker%5;
	setTimeout("tickerCycle()", 5000);
}

function fade(tickerNum)
{
	fadeIn(tickerNum);
	if(ticker == 0)
	{
	fadeOut(4);
	outString = "tickerText" + 4;
	}
	else
	{
		fadeOut(tickerNum-1);
		outString = "tickerText" + (tickerNum-1);
	}
	

	inString = "tickerText" + tickerNum;
	document.getElementById(inString).style.display = 'inline';



}
alpha = 0;
beta = 100;
function fadeIn(tickerNum)
{
	


	if( alpha < 100)
	{
		alpha += 10;
		thing = "tickerText" + tickerNum;
		document.getElementById(thing).style.opacity = alpha/100;
		document.getElementById(thing).style.filter = 'alpha(opacity=' + alpha + ')';
		
		
		setTimeout("fadeIn("+ tickerNum +")", 50);
	}
	else
	{
		alpha = 0;
	}
	
}
function fadeOut(tickerNum)
{
	if( beta > 0 )
	{
		beta -= 10;
		thing = "tickerText" + tickerNum;
		document.getElementById(thing).style.opacity = beta/100;
		document.getElementById(thing).style.filter = 'alpha(opacity=' + beta + ')';
		
		
		setTimeout("fadeOut("+ tickerNum +")", 50);
	}
	else
	{
		beta = 100;
		thing = "tickerText" + tickerNum;
		document.getElementById(thing).style.display = 'none';
	}

}


