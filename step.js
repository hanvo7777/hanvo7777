'use strict'
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "hanvv" && password == "handt123"){
alert ("Login successfully");

return false;
}
else{
attempt --;// Decrementing by one.
alert("login that bai");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("login").disabled = true;
return false;
}
}
}