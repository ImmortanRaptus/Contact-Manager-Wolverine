
//runs all non-key functions once the SIGN UP button is clicked
function checkValidation(){
	var flag = 0;
	if (userVal() == false)
	{
	flag++;
		document.getElementById('usernameMessage').style.font = 'helvetica';
		document.getElementById('usernameMessage').style.fontWeight = 'bold';
		document.getElementById('usernameMessage').style.color = 'crimson';
		document.getElementById('usernameMessage').innerHTML ='Please input a username';

	//	alert('Please input your username');
	}

	if(	emailVal() == false)
	{
	flag++;
		document.getElementById('emailMessage').style.font = 'helvetica';
		document.getElementById('emailMessage').style.fontWeight = 'bold';
		document.getElementById('emailMessage').style.color = 'crimson';
		document.getElementById('emailMessage').innerHTML ='Must be a valid address';
	//	alert('You must submit a valid email address');
	}

	if(passwordVal() == false)
	{
		flag++;
	}

	if (flag > 0)
	{
		return false;
	}
return true;
}

//Checks for password and retype password for requirements

function passwordVal(){

	var flag1 = 0;
	if ((form.Pass.value).length < 8) 
	{
		// document.getElementById('message').style.fontWeight = 'bold';
		// document.getElementById('message').style.color = 'crimson';
		// document.getElementById('message').innerHTML ='Must be 8 characters min.';
		document.getElementById('message').style.fontWeight = 'bold';

		document.getElementById('message').style.color = 'crimson';

		document.getElementById('message').innerHTML ='Length 	';
		flag1++;

		//return false;
	}

	if(!/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(form.Pass.value))
		{
		// document.getElementById('message').style.fontWeight = 'bold';
		// document.getElementById('message').style.color = 'crimson';
		// document.getElementById('message').innerHTML ='Must contain at least 1 special character';
		// alert('Your password must contain at least 1 special character');
		document.getElementById('message2').style.fontWeight = 'bold';

		document.getElementById('message2').style.color = 'crimson';

		document.getElementById('message2').innerHTML ='Symbol 	';
		flag1++;

		//return false;
	}

	if(!/[0-9]/g.test(form.Pass.value))
	{
		// document.getElementById('message').style.fontWeight = 'bold';
		// document.getElementById('message').style.color = 'crimson';
		// document.getElementById('message').innerHTML ='Must contain at least 1 number';
		// alert('Your password must contain at least 1 number');
		document.getElementById('message3').style.fontWeight = 'bold';

		document.getElementById('message3').style.color = 'crimson';

		document.getElementById('message3').innerHTML ='Number 	';
		flag1++;
		//return false;
	}

	if (form.Pass.value != form.retypePass.value) 
	{
		 document.getElementById('retypeMessage').style.fontWeight = 'bold';
		 document.getElementById('retypeMessage').style.color = 'crimson';
		 document.getElementById('retypeMessage').innerHTML ='Does not match';
		// alert('Your passwords do not match');
		return false;
	}

	if (flag1 > 0 ) {
		return false;
	}


	return true;
}

function passwordKey()
{
	if((form.Pass.value).length == 0)
	{
		document.getElementById('message').innerHTML ='';
		document.getElementById('message2').innerHTML ='';
		document.getElementById('message3').innerHTML ='';

	}
	else
	{
		document.getElementById('message').style.fontWeight = 'bold';
		document.getElementById('message2').style.fontWeight = 'bold';
		document.getElementById('message3').style.fontWeight = 'bold';
		document.getElementById('message').style.color = 'crimson';
		document.getElementById('message2').style.color = 'crimson';
		document.getElementById('message3').style.color = 'crimson';
		document.getElementById('message').innerHTML ='Length 	';
		document.getElementById('message2').innerHTML ='Symbol 	';
		document.getElementById('message3').innerHTML ='Number 	';
			if ((form.Pass.value).length >= 8) 
			{
				document.getElementById('message').style.color = 'green';
			}
			if(/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(form.Pass.value))
			{
				document.getElementById('message2').style.color = 'green';
			}
			if(/[0-9]/g.test(form.Pass.value))
			{
				document.getElementById('message3').style.color = 'green';
			}
	}


}

//Onkey function for retype password, checks if they match and removes text if they do

function retypePasswordKey()
{
		if (form.Pass.value != form.retypePass.value) 
	{
		document.getElementById('retypeMessage').style.fontWeight = 'bold';
		document.getElementById('retypeMessage').style.color = 'crimson';
		document.getElementById('retypeMessage').innerHTML ='Does not match';
		// alert('Your passwords do not match');
		return false;
	}
		else
		{
			document.getElementById('retypeMessage').innerHTML ='';
		}

}

//checks for email format when called

function emailVal(){
	var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;

	if(reg.test(form.Email.value) == false || form.Email.value == 0)
	{

			return false;
	}
	return true;
}

//pastes 'must be a valid address' for onkey input for email, erases once field is empty or email is correct

function emailValKey(){
	var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;

	if(form.Email.value == 0)
	{
		document.getElementById('emailMessage').innerHTML ='';
		return true;
	}

	else if(reg.test(form.Email.value) == false)
	{
		document.getElementById('emailMessage').style.font = 'helvetica';
		document.getElementById('emailMessage').style.fontWeight = 'bold';
		document.getElementById('emailMessage').style.color = 'crimson';
		document.getElementById('emailMessage').innerHTML ='Must be a valid address';
		return false;
	}
	document.getElementById('emailMessage').innerHTML ='';
	return true;
}


//checks if there is a username

function userVal(){
	if((form.User.value.length) == 0)
	{
		return false;
	}
	return true;
}

// Removes username Text if name is typed onkey

function userValKey(){
	if((form.User.value.length) > 0)
	{
		document.getElementById('usernameMessage').innerHTML ='';
		return false;
	}
	return true;
}
