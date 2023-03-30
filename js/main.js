var date=document.getElementById("date");
var month=document.getElementById("month");
var year=document.getElementById("year");

var hour=document.getElementById("hour");
var minute=document.getElementById("minute");
var second=document.getElementById("second");

var monday=document.getElementById('monday');
var tuesday=document.getElementById('tuesday');
var wednesday=document.getElementById('wednesday');
var thursday=document.getElementById('thursday');
var friday=document.getElementById('friday');
var saturday=document.getElementById('saturday');
var sunday=document.getElementById("sunday");

var AM=document.getElementById("am");
var PM=document.getElementById("pm");

setInterval(()=>{

	var time=new Date()

	if(time.getHours()<=12){
		hour.value=time.getHours();
	}
	else{
		hour.value=time.getHours()-12;
	}
	minute.value=time.getMinutes();
	second.value=time.getSeconds();

	date.value=time.getDate();
	month.value=time.getMonth()+1;
	year.value=time.getFullYear();

	var day=time.getDay();
	switch(day){

		case 0:
		sunday.setAttribute("checked","");
		break;
	
		case 1:
		monday.setAttribute("checked","");
		break;
	
		case 2:
		tuesday.setAttribute("checked","");
		break;
	
		case 3:
		wednesday.setAttribute("checked","");
		break;
	
		case 4:
		thursday.setAttribute("checked","");
		break;
	
		case 5:
		friday.setAttribute("checked","");
		break;
	
		case 6:
		saturday.setAttribute("checked","");
		break;	
	}

	var sessionTime=time.getHours();
	if(sessionTime<12){
		AM.setAttribute("checked","")
	}
	else{
		PM.setAttribute("checked","")
	}

},1000)

