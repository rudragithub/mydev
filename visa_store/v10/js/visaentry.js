var visaentry=
{
   show: function() {
      menu.showType('LnT_Registration');
	  visaEntryCreate.runtTimeData();
    },
    save:function()
	{
		var xmlhttp = null;
		if (window.XMLHttpRequest) {    
		xmlhttp=new XMLHttpRequest();
		} else { 	
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}	
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {					
				
				if(String(xmlhttp.responseText).trim() == "valid"){
					alert("Data Stored in DB");
					document.registerform.reset();
				}
				else
				alert("Error to connect DB")
			}
		}
		xmlhttp.open("POST","visa.php" +visaEntryQuery.register(),true);
		xmlhttp.send();
	}
}


var visaEntryQuery=
{
	register:function()
	{
		 var queryString = "?reg_uname=" + document.registerform.reg_uname.value ;
		 queryString +=  "&reg_psno=" + document.registerform.reg_psno.value ;
		 queryString +=  "&reg_BU=" + document.registerform.reg_BU.value ;
		 queryString +=  "&reg_Current_DH=" + document.registerform.reg_Current_DH.value ;
		 queryString +=  "&reg_Current_PoC=" + document.registerform.reg_Current_PoC.value ;
		 queryString +=  "&reg_status=" + document.registerform.reg_status.value ;
		 queryString +=  "&reg_available=" + document.registerform.reg_available_year.value+"-"+document.registerform.reg_available_month.value+"-"+document.registerform.reg_available_day.value;	
		 queryString +=  "&reg_priDomain=" + document.registerform.reg_priDomain.value ;
		 queryString +=  "&reg_addSkills=" + document.getElementById('addSkillArea').value ;	
		 queryString +=  "&reg_selected_client=" + document.registerform.reg_selected_client.value ;
		 queryString +=  "&reg_boarding=" + document.registerform.reg_board_year.value+"-"+document.registerform.reg_board_month.value+"-"+document.registerform.reg_board_day.value;
		 queryString +=  "&reg_PoC_DH=" + document.registerform.reg_PoC_DH.value ;
		 queryString +=  "&visa_mode=newentry";
		 
		 return queryString;
	}
}

var visaEntryCreate=
{
	addTextArea:function()
	{
		document.getElementById('commonArea').style.visibility='visible';
		document.getElementById('commonArea').innerHTML = "";
		
		if(document.getElementById('addSkillArea') != null)
		{
			var x = document.getElementById('addSkillArea');
			x.parentNode.removeChild(x);
			var x = document.getElementById('addSkillAreaBtn');
			x.parentNode.removeChild(x);
		}
		
		var t = document.createElement("textarea");
		t.setAttribute("id","addSkillArea");
		t.setAttribute("rows","10");
		t.setAttribute("cols","50");		
		document.getElementById('commonArea').appendChild(t);		
		
		var b = document.createElement("input");
		b.setAttribute("id","addSkillAreaBtn");
		b.setAttribute("type","button");
		b.setAttribute("value","Add Skills");		
		document.getElementById('commonArea').appendChild(b);
		
		b.style.top='0px';
		b.style.position='relative';
		b.style.left='-238px';
		
		document.getElementById('commonArea').style.left='114px';
		document.getElementById('commonArea').style.top='395px';
		
		b.onclick=function()
		{
			document.getElementById('commonArea').style.visibility='hidden';			
		}
	},
	runtTimeData:function()
	{
		createDropDown(bu, document.getElementById('reg_BU'));
		createDropDown(buHead, document.getElementById('reg_Current_DH'));
		createDropDown(buHead, document.getElementById('reg_Current_PoC'));
		createDropDown(buHead, document.getElementById('reg_PoC_DH'));
		//createDropDown(clientList, document.getElementById('reg_selected_client'));
	}
	
}