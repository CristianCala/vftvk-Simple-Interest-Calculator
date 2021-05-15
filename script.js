// Update the input rate
function updateRate(){

	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval;
}

// Calculate the interest
function compute(){

	var principal = document.getElementById("principal").value;

	var rate = document.getElementById("rate").value;

	var years = document.getElementById("years").value;

	// Obtain the actual year
	var year = new Date().getFullYear()+ parseInt(years);

	var interest = principal * years * rate / 100;

	if (principal == 0 ) {
		alert("Enter a number that is not zero");
		document.getElementById("principal").focus();
		document.getElementById("principal").value = "";
	}
	else if (principal < 0){
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		document.getElementById("principal").value = "";
	}
	else{
	// put the result
	document.getElementById("result").innerHTML=
	"If you deposit "+ "<span class= 'yellow-date'>" + principal  +"</span>" +",\<br\>at an interest rate of "+ "<span class='yellow-date'>" + rate + "%"+ "</span>" +"\<br\>You will receive an amount of "+ "<span class='yellow-date'>" + interest + "</span>" +",\<br\>in the year "+ "<span class='yellow-date'>" + year + "</span>" +"\<br\>"

	}
}