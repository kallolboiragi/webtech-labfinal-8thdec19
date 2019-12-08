"use strict"
function f1()
	{
		var ename = document.getElementById('ename');
		
		/*if(name.value == "")
		{
			alert("Input Name First");
		}
		*/
		
		if(ename.value == "")
		{

			var obj = document.getElementById('msg');
			obj.innerHTML = "Input Name First";
			obj.style.color = "red";
		}
		else if(ename.value.length<=5)
		{
			var obj = document.getElementById('msg');
			obj.innerHTML = "At least two words";
			obj.style.color = "red";
		}
		else if(ename.value.length>=6)
		{
			var obj = document.getElementById('msg');
			obj.innerHTML = "Correct";
			obj.style.color = "green";
		}
	}

/*function f2()
	{
		var ename = document.getElementById('ename').value;
		document.getElementById('msg').innerHTML = ename;
	}*/
function f7()
	{
		var cname = document.getElementById('cname');
		
		if(cname.value == "")
		{

			var obj = document.getElementById('msg');
			obj.innerHTML = "Input Name First";
			obj.style.color = "red";
		}
		else if(cname.value.length<=5)
		{
			var obj = document.getElementById('msg');
			obj.innerHTML = "At least two words";
			obj.style.color = "red";
		}
		else if(cname.value.length>=6)
		{
			var obj = document.getElementById('msg');
			obj.innerHTML = "Correct";
			obj.style.color = "green";
		}
	}
/*function f8()
	{
		var name = document.getElementById('name').value;
		document.getElementById('msg').innerHTML = name;
	}*/
	
function f3(inputtxt)
	{
	var contact = /^\d{10}$/;
		if((inputtxt.value.match(contact))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
	}
/*function f5()
	{	
		if(document.getElementById('gender').checked==false)
		{
			alert("Select gender")
		}
	}*/