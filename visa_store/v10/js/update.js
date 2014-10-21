var updateResponse = "";

var update=
{
	show:function()
	{
		menu.showType('searchPage');
		updateGeneral.runtTimeData();
		updateGeneral.formDisableOrEnable('disable');
		document.getElementById('searchbtn').disabled=false;
	    document.getElementById('reg_psno').disabled=false;
		document.getElementById('search_modify').disabled=true;
		document.getElementById('reg_psno').value="";		
		document.getElementById("re_regForm").reset();
	},
	search:function()
	{
		updateRequest.request();
	},
	passToFields:function(r)
	{	  
	  var fields =['reg_uname','reg_BU','reg_Current_DH','reg_Current_PoC','reg_status','reg_available_day','reg_available_month','reg_available_year','reg_priDomain','updateSkillArea','reg_selected_client','reg_board_day','reg_board_month','reg_board_year','reg_PoC_DH'];
	  updateResponse = r;	  
	  document.re_regForm[fields[0]].value = r.split("||")[0] 
	  document.re_regForm[fields[1]].value = r.split("||")[1] 
	  document.re_regForm[fields[2]].value = r.split("||")[2] 
	  document.re_regForm[fields[3]].value = r.split("||")[3] 
	  document.re_regForm[fields[4]].value = r.split("||")[4]
	  document.re_regForm[fields[5]].value = r.split("||")[5].split("-")[2];
	  document.re_regForm[fields[6]].value = r.split("||")[5].split("-")[1];
	  document.re_regForm[fields[7]].value = r.split("||")[5].split("-")[0];
	  document.re_regForm[fields[8]].value =r.split("||")[6];	  
	  document.re_regForm[fields[10]].value = r.split("||")[8];
	  document.re_regForm[fields[11]].value =r.split("||")[9].split("-")[2];
	  document.re_regForm[fields[12]].value =r.split("||")[9].split("-")[1];
	  document.re_regForm[fields[13]].value =r.split("||")[9].split("-")[0];
	  document.re_regForm[fields[14]].value =r.split("||")[10];
	  
	  document.getElementById('search_modify').disabled=false;
	  
	},
	modify:function()
	{
		updateGeneral.formDisableOrEnable('enable');
		document.getElementById('searchbtn').disabled=true;
	    document.getElementById('reg_psno').disabled=true;
	},
	addTextArea:function()
	{
		document.getElementById('commonArea').style.visibility='visible';
		document.getElementById('commonArea').innerHTML = "";
		
		if(document.getElementById('updateSkillArea') != null)
		{
			var x = document.getElementById('updateSkillArea');
			x.parentNode.removeChild(x);
			var x = document.getElementById('updateSkillAreaBtn');
			x.parentNode.removeChild(x);
		}
		
		var t = document.createElement("textarea");
		t.setAttribute("id","updateSkillArea");
		t.setAttribute("rows","10");
		t.setAttribute("cols","50");		
		document.getElementById('commonArea').appendChild(t);		
		t.value = updateResponse.split("||")[7];
		
		var b = document.createElement("input");
		b.setAttribute("id","updateSkillAreaBtn");
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
	save:function()
	{
		updateRequest.update();
	}
}

//modifyData();

var updateRequest =
{
	request:function()
	{
		var xmlhttp = null;
		if (window.XMLHttpRequest) {    
		xmlhttp=new XMLHttpRequest();
		} else { 	
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}	
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {					
				update.passToFields(String(xmlhttp.responseText).trim());
				
			}
		}
		xmlhttp.open("POST","visa.php" +updateQuery.search(),true);
		xmlhttp.send();
	},
	update:function()
	{
		var xmlhttp = null;
		if (window.XMLHttpRequest) {    
		xmlhttp=new XMLHttpRequest();
		} else { 	
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}	
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {					
				var resposne = String(xmlhttp.responseText).trim();
				alert(resposne);
			}
		}
		xmlhttp.open("POST","visa.php" +updateQuery.update(),true);
		xmlhttp.send();
	}
}

var updateQuery =
{
	search:function()
	{
		var queryString = "?reg_psno=" + document.getElementById('reg_psno').value;
		queryString +=  "&visa_mode=search";
		
		return queryString;
	},
	update:function()
	{
		var queryString = "?reg_uname=" + document.registerform.reg_uname.value ;
		 queryString +=  "&reg_psno=" + document.registerform.reg_psno.value ;
		 queryString +=  "&reg_BU=" + document.registerform.reg_BU.value ;
		 queryString +=  "&reg_Current_DH=" + document.registerform.reg_Current_DH.value ;
		 queryString +=  "&reg_Current_PoC=" + document.registerform.reg_Current_PoC.value ;
		 queryString +=  "&reg_status=" + document.registerform.reg_status.value ;
		 queryString +=  "&reg_available=" + document.registerform.reg_available_year.value+"-"+document.registerform.reg_available_month.value+"-"+document.registerform.reg_available_day.value;	
		 queryString +=  "&reg_priDomain=" + document.registerform.reg_priDomain.value ;
		 
		 if(document.getElementById('updateSkillArea') != null)
		 queryString +=  "&reg_addSkills=" + document.getElementById('updateSkillArea').value ;	
		 else
		 queryString +=  "&reg_addSkills=" + updateResponse.split("||")[7];
		 
		 queryString +=  "&reg_selected_client=" + document.registerform.reg_selected_client.value ;
		 queryString +=  "&reg_boarding=" + document.registerform.reg_board_year.value+"-"+document.registerform.reg_board_month.value+"-"+document.registerform.reg_board_day.value;
		 queryString +=  "&reg_PoC_DH=" + document.registerform.reg_PoC_DH.value ;
		 queryString +=  "&reg_PoC_DH=" + document.registerform.reg_PoC_DH.value ;
		 queryString +=  "&visa_mode=update";		 
		 return queryString;
	}
	
}



var updateGeneral=
{
	formDisableOrEnable:function(mode)
	{
		if(mode == 'disable')
		{
			var myform = document.getElementById('re_regForm');
			for (var i=0; i < myform.getElementsByTagName('input').length; i++) {
				 myform.getElementsByTagName('input')[i].disabled = true;    
			}
			for (var i=0; i < myform.getElementsByTagName('select').length; i++) {
				 myform.getElementsByTagName('select')[i].disabled = true;    
			}
			for (var i=0; i < myform.getElementsByTagName('button').length; i++) {
				 myform.getElementsByTagName('button')[i].disabled = true;    
			}
		}
		else if(mode == 'enable')
		{
			var myform = document.getElementById('re_regForm');
			for (var i=0; i < myform.getElementsByTagName('input').length; i++) {
				 myform.getElementsByTagName('input')[i].disabled = false;    
			}
			for (var i=0; i < myform.getElementsByTagName('select').length; i++) {
				 myform.getElementsByTagName('select')[i].disabled = false;    
			}
			for (var i=0; i < myform.getElementsByTagName('button').length; i++) {
				 myform.getElementsByTagName('button')[i].disabled = false;    
			}
		}
	},
	runtTimeData:function()
	{
		createDropDown(bu, document.getElementById('r_reg_BU'));
		createDropDown(buHead, document.getElementById('r_reg_Current_DH'));
		createDropDown(buHead, document.getElementById('r_reg_Current_PoC'));
		createDropDown(buHead, document.getElementById('r_reg_PoC_DH'));		
	}
}





//------------client selected ------------
var client_id=1;
var addedClientArr=[];

updateClientData = "";
updateorinsert=""
loadedDBClient=false;

function clientSelected()
{ 
	addedClientArr = [];
	document.getElementById('clientAddtable').innerHTML="";
	document.getElementById('clientAddtable').innerHTML ="<tbody><tr><th style='height: 30px;' class='colum'>Client Name</th><th style='height: 30px;' class='colum'>PoC/DH</th><th style='height: 30px;' class='colum'>Shared Date</th><th style='height: 30px;' class='colum'>Expected Closure Date</th><th style='height: 30px;' class='colum'>Add / Remove</th></tr>";	

	var csel = document.getElementById('clientSelection');
	csel.style.visibility='visible';
	csel.style.left=(screen.width-csel.offsetWidth)/2+'px';
	csel.style.zIndex=4;
	var popbg = document.getElementById('popupbg');
	popbg.style.width = screen.width+'px';
	popbg.style.height = screen.height+'px';
	popbg.style.position = 'absolute';
	popbg.style.backgroundColor='black';
	popbg.style.zIndex=3;
	popbg.style.opacity='.3';
	document.getElementById('popupbg').style.visibility='visible';	
	
	var xmlhttp = null;
	if (window.XMLHttpRequest) {    
        xmlhttp=new XMLHttpRequest();
    } else { 	
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }	
	 xmlhttp.onreadystatechange=function() {
	   
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {		
            response = String(xmlhttp.responseText).trim();				
			var rows = Number(response.split("@||@")[0]);		
			for(var i=1;i<=rows;i++)
			{
				var data = response.split("@||@")[i];				
				
				createClientRowData(i);
				addedClientArr.push(i);					
				
				document.clientUpdateForm["data6_"+i].value = String(data.split("||")[0]).split("-")[0];
				document.clientUpdateForm["data1_"+i].value =String(data.split("||")[0]).split("-")[1];
				document.clientUpdateForm["data2_"+i].value =data.split("||")[3];
				document.clientUpdateForm["targetDay_"+i].value =String(data.split("||")[1]).split("-")[2];
				document.clientUpdateForm["targetMonth_"+i].value =String(data.split("||")[1]).split("-")[1];
				document.clientUpdateForm["targetYear_"+i].value =String(data.split("||")[1]).split("-")[0];
				document.clientUpdateForm["scheduleDay_"+i].value =String(data.split("||")[2]).split("-")[2];
				document.clientUpdateForm["scheduleMonth_"+i].value =String(data.split("||")[2]).split("-")[1];
				document.clientUpdateForm["scheduleYear_"+i].value =String(data.split("||")[2]).split("-")[0];
				
			}
			
				client_id = rows;
        }
    }	
	 var queryString = "?reg_psno=" + document.getElementById('reg_psno').value ;
	queryString+="&visa_mode=shared";
	xmlhttp.open("POST","visa.php" +queryString,true);
    xmlhttp.send();	

}

function createClientRowData(id)
{
	var table = document.getElementById('clientAddtable');
	var row = document.createElement('tr');	
	row.setAttribute('id',"clientRow_"+id);
	table.appendChild(row);

	//--- DATA 1 ------------
	var data = document.createElement('td')
	row.appendChild(data);

	var o = document.createElement('input');
	o.setAttribute('name','data1_'+id);
	o.setAttribute('value','');		
	data.appendChild(o);
	
	//--- DATA 2 ------------
	var data = document.createElement('td')
	row.appendChild(data);
	var sel = document.createElement('select');
	sel.setAttribute('name','data2_'+id)
	for(var i=0;i<buHead.length;i++)
	{
		var o = document.createElement('option');
		o.setAttribute('value',buHead[i]);
		o.innerHTML=buHead[i];
		sel.appendChild(o);
	}
	data.appendChild(sel);
	
	//---DATA 3----------
	var data = document.createElement('td')
	row.appendChild(data);
	data.innerHTML = "<input type='text' maxlength='2' name='targetDay_"+id+"' style='width:25px;' placeholder='DD' value='' size='15'><span> &nbsp/ &nbsp</span><input maxlength='2' style='width:25px;' type='text' name='targetMonth_"+id+"' placeholder='MM' value='' size='15'><span> &nbsp/ &nbsp</span><input maxlength='4' type='text' name='targetYear_"+id+"' style='width:40px;'  placeholder='YYYY' value='' size='20'></td>";

	
	//---DATA 4----------
	var data = document.createElement('td')
	row.appendChild(data);
	data.innerHTML = "<input maxlength='2' type='text' name='scheduleDay_"+id+"' style='width:25px;' placeholder='DD' value='' size='15'><span> &nbsp/ &nbsp</span><input maxlength='2' style='width:25px;' type='text' name='scheduleMonth_"+id+"' placeholder='MM' value='' size='15'><span> &nbsp/ &nbsp</span><input maxlength='4' type='text' name='scheduleYear_"+id+"' style='width:40px;'  placeholder='YYYY' value='' size='20'></td>";
	
	//---DATA 5----------
	var data = document.createElement('td')
	row.appendChild(data);
	data.style.textAlign='center';
	var sel = document.createElement('input');
	sel.setAttribute('name','data5_'+id);
	sel.setAttribute('type','button');
	if(id == 1){
	sel.setAttribute('value','+');
	//addedClientArr.push(1);
	}
	else
	sel.setAttribute('value','-');
	data.appendChild(sel);
	
	//DATA - 6 hidden field 
	var x = document.createElement("INPUT");
    x.setAttribute("type", "hidden");
	x.setAttribute("name", "data6_"+id);
	x.setAttribute("value", "0");
    data.appendChild(x);

	sel.onclick = function()
	{
		
		 if(this.getAttribute('value') == "-")
		 {
		 
		  if (confirm("Are you confirm to delete ?") == true) {
			  var thisid = this.getAttribute('name').split("data5_")[1];
			  validation.deleteRow(document.clientUpdateForm["data6_"+thisid].value);
			  var len = addedClientArr.length;
			  var x = document.getElementById('clientRow_'+thisid);
			  x.parentNode.removeChild(x);		 		   
			   for(var i=0;i<len;i++){
					if(Number(thisid) == addedClientArr[i]){
					addedClientArr.splice(i,1);			
					}
			   }
		   }	    
		 }
		 else
		 {	
			client_id++;
			addedClientArr.push(client_id);
			createClientRowData(client_id);			 
		 }	 
		
	}

	
	
}

function closeUpdateClient()
{

  document.getElementById('clientSelection').style.visibility='hidden';
  document.getElementById('popupbg').style.visibility='hidden';
 
}

//------------save updated data
function updateData()
{
  updateClientData = "";
  updateorinsert="";
  alert(addedClientArr);
  for(var j=0;j<addedClientArr.length;j++)
  {
	var i = addedClientArr[j];	
	updateClientData+=document.clientUpdateForm["data1_"+i].value+","+document.clientUpdateForm["data2_"+i].value+","+document.clientUpdateForm["targetYear_"+i].value+"-"+document.clientUpdateForm["targetMonth_"+i].value+"-"+document.clientUpdateForm["targetDay_"+i].value+","+document.clientUpdateForm["scheduleYear_"+i].value+"-"+document.clientUpdateForm["scheduleMonth_"+i].value+"-"+document.clientUpdateForm["scheduleDay_"+i].value+"||"
	alert(document.clientUpdateForm["data6_"+i].value);
	updateorinsert+=document.clientUpdateForm["data6_"+i].value+"||"	
  }
 
  closeUpdateClient();
}