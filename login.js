var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "thelam92" && password == "123456"){
		alert ("Login successfully. Xin chao "+username+" den voi trang quan tri website");
window.location = "bbc1.html"; // Redirecting to other page.
return true;
}
else{
attempt --;// Decrementing by one.
alert("Ban chi con "+attempt+" luot nhap;");
// Disabling fields after 3 attempts.
if( attempt == 0){
	document.getElementById("username").disabled = true;
	document.getElementById("password").disabled = true;
	document.getElementById("submit").disabled = true;
	alert("Bye bye ban nhe! Co nho id and password di roi F5 lai trang.");
	return false;
}
}
}