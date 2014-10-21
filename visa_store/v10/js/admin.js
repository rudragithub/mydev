//================ version 1.0======================================

//----------------------- page onloaded ----------------------------
window.onload = function() {
    
    popup.show('LnT_Adminlogin', 300, 170, -85, -150);  
   
};


//----------------------- poup screen controllers ----------------------------
var popup = {
    show: function(id, w, h, t, l) {
        var popup = document.getElementById(id);
	
        popup.style.display = 'none';
        popup.style.display = 'block';
        popup.style.width = w + 'px';
        popup.style.height = h + 'px';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.position = 'fixed';
        popup.style.marginTop = t + 'px';
        popup.style.marginLeft = l + 'px';
        popup.style.borderStyle = 'solid';
        popup.style.borderWidth = '1px';
    },
    remove: function(c) {
        var x = document.getElementById(c)
        x.parentNode.removeChild(x);
    },
    hide: function(c) {
        document.getElementById(c).style.visibility = 'hidden';
    },
    reShow: function(c) {
        document.getElementById(c).style.visibility = 'visible';
    }
}


function validate()
{
   var xmlhttp = null;
	if (window.XMLHttpRequest) {    
        xmlhttp=new XMLHttpRequest();
    } else { 	
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }	
	 xmlhttp.onreadystatechange=function() {
	 
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {		
            response = String(xmlhttp.responseText).trim();				
			if(response =='valid'){
				document.getElementById('LnT_Adminlogin').style.visibility='hidden';
				document.getElementById('Lnt_Give_Access').style.visibility='visible';
				 popup.show('Lnt_Give_Access', 400, 140, -70, -200);
				
			}else{				
				alert("invalid user");
			}
            
        }
    }	
	 var queryString = "?login_uname=" + document.loginform.login_uname.value ;
	 queryString +=  "&login_pwd=" + document.loginform.login_pwd.value ;
 	
	xmlhttp.open("POST","admincheck.php" +queryString,true);
    xmlhttp.send();

}

function usedAddedValidation()
{

 if(document.accessform.access_ps.value != document.accessform.confirm_ps.value)
 {
   alert("PS Number not match");
 }
   var xmlhttp = null;
	if (window.XMLHttpRequest) {    
        xmlhttp=new XMLHttpRequest();
    } else { 	
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }	
	 xmlhttp.onreadystatechange=function() {
	 
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {		
            response = String(xmlhttp.responseText).trim();				
			if(response =='valid'){
				alert("Admin Access Given");	
				window.location.reload();
			}else{				
				alert("invalid user");
			}
            
        }
    }	
	 var queryString = "?ps_no=" + document.accessform.access_ps.value;
	 
 	
	xmlhttp.open("POST","AdminUserList.php" +queryString,true);
    xmlhttp.send();

}

function logoff()
{
	var xmlhttp = null;
	if (window.XMLHttpRequest) {    
		xmlhttp=new XMLHttpRequest();
	} else { 	
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}	
	 xmlhttp.onreadystatechange=function() {
	   
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {				
			window.location.reload();						
		}
	}		
	xmlhttp.open("POST","logoff.php",true);
	xmlhttp.send();
};

