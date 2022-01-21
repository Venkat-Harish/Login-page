function validate()
{
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
if(username=="apple"&& password=="ban")
{
	alert("login succesfull");
	return false;
}
else
{
	alert("login failed");	
}
}