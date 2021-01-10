var button=document.getElementById("modeSwitch");
// padding: 2px 35px 2px 2px;
var bgPattern=document.getElementsByClassName("pattern")[0];

var h1=document.getElementsByTagName("h1");
var h6=document.getElementsByTagName("h6");
var theme=document.getElementsByClassName("theme")[0];
var userTag=document.getElementsByClassName("userTag")[0];
var overviewHeader=document.getElementsByClassName("overviewHeader")[0];
var dashboardZone=document.getElementsByClassName("dashboardZone");
var overviewZone=document.getElementsByClassName("overviewZone");
var overviewZoneText=document.getElementsByClassName("overviewZoneText");
var overviewNumber=document.getElementsByClassName("overviewNumber");
var titleTop=document.getElementById("TitleTop");
var titleBot=document.getElementById("TitleBot");


var currentTheme="dark";

function hoverEnter(){
	if(currentTheme==="dark")
	{
		this.style.backgroundColor="#333a56";
	}
	else{
		this.style.backgroundColor="#e1e3f0";
	}
}
function hoverLeave(){
	if(currentTheme==="dark")
	{
		this.style.backgroundColor="hsl(228, 28%, 20%)";
	}
	else{
		this.style.backgroundColor="hsl(227, 47%, 96%)";
	}
}

function changeTheme(){
	if(currentTheme==="dark")
	{
		document.body.style.backgroundColor = "white";
		bgPattern.style.backgroundColor ="hsl(225, 100%, 98%)";

		titleTop.style.color="hsl(230, 17%, 14%)";
		titleBot.style.color="hsl(228, 12%, 44%)";
		overviewHeader.style.color="hsl(228, 12%, 44%)";
		theme.style.color="hsl(228, 12%, 44%)";
		userTag.style.color="hsl(228, 12%, 44%)";

		for(var i=0;i<h1.length;i++){h1[i].style.color="hsl(230, 17%, 14%)";}
		for(var i=0;i<h6.length;i++){h6[i].style.color="hsl(228, 12%, 44%)";}
		for(var i=0;i<dashboardZone.length;i++){dashboardZone[i].style.backgroundColor="hsl(227, 47%, 96%)";}
		for(var i=0;i<overviewZone.length;i++){overviewZone[i].style.backgroundColor="hsl(227, 47%, 96%)";}
		for(var i=0;i<overviewZoneText.length;i++){overviewZoneText[i].style.color="hsl(228, 12%, 44%)";}
		for(var i=0;i<overviewNumber.length;i++){overviewNumber[i].style.color="hsl(230, 17%, 14%)";}

		button.style.padding="2px 2px 2px 35px";

		currentTheme="light";
	}
	else{
		document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
		bgPattern.style.backgroundColor ="hsl(232, 19%, 15%)";

		titleTop.style.color="white";
		titleBot.style.color="hsl(228, 34%, 66%))";
		overviewHeader.style.color="hsl(228, 34%, 66%)";
		theme.style.color="hsl(228, 34%, 66%)";
		userTag.style.color="hsl(228, 34%, 66%)";

		for(var i=0;i<h1.length;i++){h1[i].style.color="white";}
		for(var i=0;i<h6.length;i++){h6[i].style.color="hsl(228, 34%, 66%)";}
		for(var i=0;i<dashboardZone.length;i++){dashboardZone[i].style.backgroundColor="hsl(228, 28%, 20%)";}
		for(var i=0;i<overviewZone.length;i++){overviewZone[i].style.backgroundColor="hsl(228, 28%, 20%)";}
		for(var i=0;i<overviewZoneText.length;i++){overviewZoneText[i].style.color="hsl(228, 34%, 66%)";}
		for(var i=0;i<overviewNumber.length;i++){overviewNumber[i].style.color="white";}
			
		button.style.padding="2px 35px 2px 2px";

		currentTheme="dark";
	}
}


button.addEventListener("click", changeTheme);
for(var i=0;i<dashboardZone.length;i++)
{
	dashboardZone[i].addEventListener("mouseenter", hoverEnter);
	dashboardZone[i].addEventListener("mouseleave", hoverLeave);
}
for(var i=0;i<overviewZone.length;i++)
{
	overviewZone[i].addEventListener("mouseenter", hoverEnter);
	overviewZone[i].addEventListener("mouseleave", hoverLeave);
}