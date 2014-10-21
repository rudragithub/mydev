



var validation=
{
  
  registerData:function(mode)
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
			alert("Data Stored");	
			//document.getElementById("regForm").reset();
			userDataRegister.registered=true;	
			}else{				
				alert("Input invalid");
			}
            
        }
    }	
	
	
	if(mode == "register")
	{
	 var queryString = "?reg_uname=" + document.registerform.reg_uname.value ;
	 queryString +=  "&reg_psno=" + document.registerform.reg_psno.value ;
 	 queryString +=  "&reg_BU=" + document.registerform.reg_BU.value ;
	 queryString +=  "&reg_Current_DH=" + document.registerform.reg_Current_DH.value ;
	 queryString +=  "&reg_Current_PoC=" + document.registerform.reg_Current_PoC.value ;
	 queryString +=  "&reg_status=" + document.registerform.reg_status.value ;
	 queryString +=  "&reg_available=" + document.registerform.reg_available_year.value+"-"+document.registerform.reg_available_month.value+"-"+document.registerform.reg_available_day.value;	
	 queryString +=  "&reg_priDomain=" + document.registerform.reg_priDomain.value ;
	 queryString +=  "&reg_addSkills=" + document.registerform.reg_addSkills.value ;	
	 queryString +=  "&reg_selected_client=" + document.registerform.reg_selected_client.value ;
	 queryString +=  "&reg_boarding=" + document.registerform.reg_board_year.value+"-"+document.registerform.reg_board_month.value+"-"+document.registerform.reg_board_day.value;
	 queryString +=  "&reg_PoC_DH=" + document.registerform.reg_PoC_DH.value ;
	 queryString +=  "&chk=1";
	 
	}	 
	 else if(mode == "update")
	 {
		 var queryString = "?reg_psno=" + document.getElementById('reg_psno').value;	
		 queryString +=  "&reg_uname=" + document.re_regForm.reg_uname.value ;		
		 queryString +=  "&reg_status=" + document.re_regForm.reg_status.value ;	
		 queryString +=  "&reg_available=" + document.re_regForm.reg_available.value ;
		 queryString +=  "&reg_baseaccount=" + document.re_regForm.reg_baseaccount.value ;
		 queryString +=  "&reg_baseDH=" + document.re_regForm.reg_baseDH.value ;
		 queryString +=  "&reg_priDomain=" + document.re_regForm.reg_priDomain.value ;
		 queryString +=  "&reg_priSkills=" + document.re_regForm.reg_priSkills.value ;
		 queryString +=  "&reg_addSkills=" + document.re_regForm.reg_addSkills.value ;	
	
		 queryString +=  "&reg_visaValid=" + document.re_regForm.re_visa_year.value+"-"+document.re_regForm.re_visa_month.value+"-"+document.re_regForm.re_visa_day.value;	
		if(updateClientData != "")	 {
		queryString +=  "&reg_update="+updateClientData;
		queryString += "&UorI="+updateorinsert;
		}
		else
		queryString +=  "&chk=2";
		alert(queryString);
		
	 }
	 
	
	xmlhttp.open("POST","userdetails.php" +queryString,true);
    xmlhttp.send();
	
  },
  searchPage:function(psno)
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
			
			if(response != "invalid")
            passSearchDataToTextFields(response);
			else
			alert("DATA NOT FOUND");
        }
    }	
	 var queryString = "?ps_no=" + psno ;
	
	xmlhttp.open("POST","search.php" +queryString,true);
    xmlhttp.send();
  },
   deleteRow:function(id)
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
				alert("Row Deleted");
			}
		}	
		 var queryString = "?index=" + id ;
		
		xmlhttp.open("POST","delete.php" +queryString,true);
		xmlhttp.send();
    
  },
   getClientName:function()
  {   
		var xmlhttp = null;
		if (window.XMLHttpRequest) {    
			xmlhttp=new XMLHttpRequest();
		} else { 	
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}	
		 xmlhttp.onreadystatechange=function() {
		   
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {		
				var response = String(xmlhttp.responseText).trim();	
				
				var id=0;
				
				while(response.split("||")[id] != undefined && response.split("||")[id] != "")
				{
					clientList[id]=(response.split("||")[id]);				
					id++;
				}
				
			}
		}		
		
		xmlhttp.open("POST","clientname.php" ,true);
		xmlhttp.send();
    
  },
  getBUHead:function()
  {   
		var xmlhttp = null;
		if (window.XMLHttpRequest) {    
			xmlhttp=new XMLHttpRequest();
		} else { 	
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}	
		 xmlhttp.onreadystatechange=function() {
		   
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {		
				var response = String(xmlhttp.responseText).trim();			 
				var id=0;				
				while(response.split("||")[id] != undefined && response.split("||")[id] != "")
				{
					buHead[id]=(response.split("||")[id]);				
					id++;
				}
				
				//createDropDown(buHead, document.getElementById('reg_Current_DH'));
				//createDropDown(buHead, document.getElementById('reg_Current_PoC'));
				//createDropDown(buHead, document.getElementById('reg_PoC_DH'));
				
			}
		}		
		
		xmlhttp.open("POST","buhead.php" ,true);
		xmlhttp.send();
    
  }
} 




