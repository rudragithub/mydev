//--- Login Screen ------------- 

var userLevel  = 
{
  getType:function()
  {	
    if(document.getElementById("admin_right").checked == true)
	loginValidate.usermode='Admin'
	else
	loginValidate.usermode='Normal';	
  }  
}

var loginValidate = 
{
	usermode:"Normal",
	validate:function(phpFile,query,type)
	{
		var xmlhttp = null;
		if (window.XMLHttpRequest) {    
		xmlhttp=new XMLHttpRequest();
		} else { 	
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}	
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {	
				switch (type)
				{
					case 'login':
					connectProcess.login(xmlhttp.responseText);
					break;
					case 'register':
					connectProcess.register(xmlhttp.responseText);
					break;
					case 'forgot':
					connectProcess.forgotPwd(xmlhttp.responseText);
					break;
					case 'reset':
					connectProcess.resetPwd(xmlhttp.responseText);
					break;
					default:  alert("Connection Error");
				}
				
			}
		}
		xmlhttp.open("POST",phpFile +query,true);
		xmlhttp.send();
	}
}

var connectProcess=
{
	login:function(r)
	{	
		var response = String(r).trim();	
		if(response =='valid' && loginValidate.usermode == "Admin"){ menu.load();}
		else if(response =='valid' && loginValidate.usermode == "Normal")
		{
			menu.load();
			 var x= document.getElementById('tab_visaRegister');
			 x.parentNode.removeChild(x);
			 var x= document.getElementById('tab_update');
			 x.parentNode.removeChild(x);
			 var x= document.getElementById('tab_newclient');
			 x.parentNode.removeChild(x);			 
		}
		else{				
			alert("invalid user");
		}
	},
	register:function(r)
	{
		var response = String(r).trim();		
		if(response =='valid'){			
			alert("Registered Successfully");			
			window.location.reload();		
		} else if(response =='pass'){
			alert("Password Not Match");
		}
		else{				
			alert("Registration Failed");
		}			
	},
	forgotPwd:function(r)
	{
		var response = String(r).trim();		
		if(response =='valid'){
		forgotPwd.reset();				
		}else{				
			alert("Input invalid");
		}
	},
	resetPwd:function(r)
	{
		var response = String(r).trim();		
		if(response =='valid'){
		window.location.reload();				
		}else{				
			alert("Input invalid");
		}
	}
}

var getQuery =
{
  login:function()
  {
	 var queryString = "?login_uname=" + document.loginform.login_uname.value ;
	 queryString +=  "&login_pwd=" + document.loginform.login_pwd.value;
 	 queryString +=  "&user_type=" + loginValidate.usermode;
	 queryString +=  "&login_mode=login";
	 console.log(queryString)
	 return queryString;
  },
  register:function()
  {
	 var queryString = "?newuser_uname=" + document.newuserRegform.newuser_uname.value ;
	 queryString +=  "&newuser_pwd=" + document.newuserRegform.newuser_pwd.value ;
	 queryString +=  "&confirm_pwd=" + document.newuserRegform.newuser_confirm_pwd.value ;
	 queryString +=  "&new_user_question=" + document.newuserRegform.new_user_regis.value ;
	 queryString +=  "&newuser_ans=" + document.newuserRegform.newuser_ans.value ;	  
 	 queryString +=  "&type=" + loginValidate.usermode;
	 queryString +=  "&login_mode=register"; 
	 console.log(queryString);
	 return queryString;
  },
  forgotPwd:function()
  {
	 var queryString = "?forgot_uname=" + document.forgotform.forgot_uname.value ;
	 queryString +=  "&forgot_pwd=" + document.forgotform.forgot_pwd.value ;
 	 queryString +=  "&forgot_ans=" + document.forgotform.forgot_ans.value ;
	 queryString +=  "&login_mode=forgot"; 
	 return queryString;
  },
  resetPwd:function()
  {
	var queryString = "?reset_pwd=" + document.resetform.reset_pwd.value ;
	queryString +=  "&login_mode=reset";
	return queryString;
  }
}

//--------------------- login screen ------------------
var login =
{
	show: function() {
	popup.show('LnT_login', 300, 170, -85, -150); 
	},
	hide: function() {
	 popup.hide('LnT_login')
	}
}

//----------------------- new user registration  screen  ----------------------------
var newuserRegister = {
    show: function() {
        popup.show('LnT_newuser_register', 550, 240, -120, -275);
        document.getElementById('LnT_newuser_register').style.visibility = 'visible';
        popup.hide('LnT_login')
    },
    register: function() {
        popup.reShow('LnT_login')
        popup.hide('LnT_newuser_register')
        alert("successfully registered");
    }
}

//----------------------- forgot and reset password  screen  ----------------------------
var forgotPwd = {
    show: function() {
        popup.show('LnT_ForgotPassword', 550, 180, -90, -275);
        document.getElementById('LnT_ForgotPassword').style.visibility = 'visible';
        popup.hide('LnT_login')
    },
    reset: function() {
        popup.show('LnT_Reset_pwd', 400, 140, -70, -200);
        document.getElementById('LnT_Reset_pwd').style.visibility = 'visible';
        popup.hide('LnT_ForgotPassword')
    },
    save: function() {
        popup.hide('LnT_Reset_pwd');
        popup.reShow('LnT_login');
    }
	
}

//0------------ TEsting Code -----------------------------
//loginValidate.validate('register.php',getQuery.newUserRegister(),'register')
//loginValidate.validate('resetpsswd.php',getQuery.resetPwd(),'reset')
//localhost/v10/logincheck.php?login_uname=aaa&login_pwd=123&user_type=Normal&login_mode=login
//localhost/v10/logincheck.php??newuser_uname=JPNew&newuser_pwd=1&confirm_pwd=1&new_user_question=What is your childhood name?&newuser_ans=1&type=Normal&login_mode=register