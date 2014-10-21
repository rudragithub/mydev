//================ version 1.0======================================
 var userMode;
 clientList =[];
 buHead = [];
 bu=['PES','CISCO'];

//----------------------- page onloaded ----------------------------
window.onload = function() {
    
   login.show();  
   validation.getBUHead();
   validation.getClientName();
   
   
   document.getElementById('search_update').style.left='-18px';
   document.getElementById('search_update').style.position='relative';
   document.getElementById('LnT_Registration').style.visibility='hidden';	
   
   
	
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


function checkRegistration()
{
 alert("Successfullys registered");
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

max_rows = 0 ;
var show_in_page;
var total_rows;	
var total_pages;
var last_page_data;
var selectedFilter="All";
//--------------------------- visa details ------------------------------------



   
	var total_rounds = 1;
	var current_round = 1;
	var total_page_show = 5;
	var table_created = false;
	
	var colunArr = ['Name', 'PS No', 'BU', 'Current DH', 'Current PoC', 'Availability Status', 'Available by Date', 'Primary Domain/ Skill', 'Detailed Skills','Selected for client','Onboardng Date', 'PoC/ DH', 'Shared clients'];
	
	
	function tableIntialize()
	{
		menu.showType('visaTable');
		
		if(table_created == false)
		{
		
			var xmlhttp = null;
			if (window.XMLHttpRequest) {    
				xmlhttp=new XMLHttpRequest();
			} else { 	
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}	
			 xmlhttp.onreadystatechange=function() {
			   
				if (xmlhttp.readyState==4 && xmlhttp.status==200) {	
					if(table_created == false)
					createTable();		
					table_created = true;
					
					response = String(xmlhttp.responseText).trim();		
					
					total_rows = Number(response.split("-")[0]);
					
					max_rows = total_rows;	
					
					show_in_page = Number(response.split("-")[1]);	
					configurePages();
					document.getElementById('visaTable').style.visibility='visible';
					
				}
			}			
			xmlhttp.open("POST","display.php?reset_from=0&reset_to=0" ,true);
			xmlhttp.send();
		}
		else
		{		
			document.getElementById('visaTable').style.visibility='visible';
			selectedFilter="All";			
			document.getElementById('clientFilter').selectedIndex =0;
			showFilter(selectedFilter);
		}
	  }
	  
	 
	    function configurePages()
	  {
	  
		total_pages = Math.ceil(total_rows/show_in_page);
		last_page_data = total_rows%show_in_page;						
		
		if(total_pages > total_page_show){
		createPageNos("exceed");
		total_rounds = Math.ceil(total_pages/total_page_show);
		}		
		else
		{
		
		
		createPageNos("limited");
		
		}
		
		
	  }
	  function hideTable()
	  {
		//visaentry.register();
		document.getElementById('visaTable').style.visibility='hidden';
	  }
	 
	  function createPageNos(type)
	  {
	  
	
		pageNumberNew.remove();
		var s = pageNumberNew.create();
		
		if(type == "limited")
		{		
			if(total_pages>1)
			pageLimitRange(s,0,total_pages);			
		}		
		else if(type=='exceed')
		{		
			addPreviousPageIcon(s);
			pageLimitRange(s,0,total_page_show);			
		}	
		
		
		if(type=='exceed')
		addNextPageIcon(s);
		
	  }
	  
	  
	  function pageLimitRange(s,a,b)
	  {
		
		for (var i = a; i < b; i++) {
            var atag = document.createElement('a');
            atag.setAttribute('class', 'paginate');
            atag.setAttribute('tabindex', '0');
            atag.setAttribute('id', 'page_' + i)            
            atag.innerHTML = i + 1;
            s.appendChild(atag);
            atag.onclick = function() {			
                getData(this.id)
            }
		  }
		
		  getData('page_'+a);
		}
		
		
	  function showNextPages()
	  {
	 
		pageNumberNew.remove();
		current_round++;
		
		if(current_round < total_rounds)
		{
			var nxtStart = ((current_round-1)*total_page_show);
			var nxtend = ((current_round)*total_page_show);	
			
			var s = pageNumberNew.create();
			addPreviousPageIcon(s);			
			pageLimitRange(s,nxtStart,nxtend);
			addNextPageIcon(s);			
		}
		else if(current_round == total_rounds)
		{		
			var nxtStart = ((current_round-1)*total_page_show);
			var s = pageNumberNew.create();
			addPreviousPageIcon(s);			
			pageLimitRange(s,nxtStart,total_pages);	
		}
		
	  }
	  
	  function showBackPages()
	  {
		current_round--;
		if(current_round >=1){		
		pageNumberNew.remove();
		var nxtStart = ((current_round-1)*total_page_show);
		var nxtend = ((current_round)*total_page_show);			
		var s = pageNumberNew.create();
		addPreviousPageIcon(s);
		pageLimitRange(s,nxtStart,nxtend);
		addNextPageIcon(s);
		}
		if(current_round <=1)
		current_round = 1;
	  }
	  
	  
	  
	  
	  
	  function addNextPageIcon(s)
	  {
		
		var atag = document.createElement('a');
		atag.setAttribute('class', 'paginate');
		atag.setAttribute('tabindex', '0');
		atag.setAttribute('id', 'nav_next');
		atag.style.width = '100px';
		atag.innerHTML = "Next";
		atag.style.left = '212px';
		atag.style.position = "absolute";		
		s.appendChild(atag);		 
		atag.onclick = function() {		    
			showNextPages();
		};
	  }
	  
	  function addPreviousPageIcon(s)
	  {
		var atag = document.createElement('a');
		atag.setAttribute('class', 'paginate');
		atag.setAttribute('tabindex', '0');
		atag.setAttribute('id', 'nav_prev');
		atag.style.width = '100px';
		atag.innerHTML = "Previous";
		s.appendChild(atag)
		atag.onclick = function() {
		showBackPages();
		};	
	  }
	  
	  function getData(e)
	  {	   
		 var id= Number(String(e).split("_")[1]);
		 var stRange = (id*show_in_page);				
		 sendRequest(stRange,show_in_page)
	  }
	  
	  function sendRequest(stRange,endRange)
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
				console.log(response);
				var len = Number(String(String(response).split("-")[0]).length)+1;
			    displayData(String(response).substring(len,response.length));					
			}
		}		
		xmlhttp.open("POST","fetchClientDetails.php?reset_from="+stRange+"&reset_to="+endRange+"&filter_clientName="+selectedFilter ,true);
		xmlhttp.send();
	  }

	function displayData(r)
	{
		
		var rowdata = r;			
		var cnt=0;
		
		if(document.getElementById('visabody') != null)
		{
			var x = document.getElementById('visabody');
			x.parentNode.removeChild(x);
		}
		var tbody1 = document.createElement('tbody');
		tbody1.setAttribute('id','visabody')
		document.getElementById('DB_Visa').appendChild(tbody1);
		while(rowdata.split("@||@")[cnt] != undefined && rowdata.split("@||@")[cnt] != "")
		{
			var colum_data = rowdata.split("@||@")[cnt];
			cnt++;
			 var columrow = document.createElement('tr');
			columrow.setAttribute('id', "LntRow_" + cnt);
			
			tbody1.appendChild(columrow)
			
			 for (var j = 1; j <= colunArr.length; j++) {
			var columdata = document.createElement('th');
			if (cnt % 2 == 1)
				columdata.setAttribute('class', 'tg-031e')
			else
				columdata.setAttribute('class', 'tg-vn4c')
			columrow.appendChild(columdata);
			
			columdata.innerHTML=colum_data.split("||")[j-1];
		    if(j == 9)
            columdata.innerHTML = "<input type='button' id='viewSkills_'"+j+" value='view'>"
			else if(j == 13)
            columdata.innerHTML = "<input type='button' id='viewShareed_'"+j+" value='Shared View'>"
		}
	   
		}
		
	}
	
	function createTable()
	{
	
	    var tb = document.createElement('table');
        var headrow = document.createElement('tr');
        var headdata = document.createElement('th');

        tb.setAttribute('class', 'tg')
        tb.setAttribute('id', 'DB_Visa')
        headdata.setAttribute('class', 'header')
        headdata.setAttribute('colspan', colunArr.length)

        document.getElementById('visaTable').appendChild(tb);
        tb.appendChild(headrow)
        headrow.appendChild(headdata)

        headdata.innerHTML = 'Visa Details';
		
		var tb = document.getElementById('DB_Visa');
        var columrow = document.createElement('tr');
		for (var i = 1; i <= colunArr.length; i++) {
            var columdata = document.createElement('th');
            columdata.setAttribute('class','colum');
			columdata.setAttribute('id','visa_col_'+i)
            tb.appendChild(columrow)
            columrow.appendChild(columdata);
            columdata.innerHTML = colunArr[i - 1];
            columdata.style.height = '30px';
            
			         
        }
	}


function addClientFilterOptions()
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
	document.getElementById('visa_col_'+11).innerHTML =colunArr[10]+response;
	}
	}			
	xmlhttp.open("POST","clientnamedrop.php",true);
	xmlhttp.send();
}
function showFilteredClient(e)
{

	showFilter(e.options[e.selectedIndex].value)
}

function showFilter(val)
{
	var xmlhttp = null;
	if (window.XMLHttpRequest) {    
		xmlhttp=new XMLHttpRequest();
	} else { 	
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}	
	selectedFilter = val;	
	total_rounds = 1;
	current_round = 1;	
	 xmlhttp.onreadystatechange=function() {
	   
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
						
			var response = String(xmlhttp.responseText).trim();			
			sendRequest(0,show_in_page)
			total_rows = Number(response.split("-")[0]);			
			pageNumberNew.remove();
			configurePages();			
		}
	}	
		

	xmlhttp.open("POST","fetchClientDetails.php?reset_from=0&reset_to=0&filter_clientName="+selectedFilter ,true);
	xmlhttp.send();
}



var pageNumberNew = {

    remove: function() {
        var x = document.getElementById('pageNumSpan')
        if (x != null)
            x.parentNode.removeChild(x)
    },
    create: function() {
        var s = document.createElement('span');
        s.setAttribute('id', 'pageNumSpan');
        document.getElementById('visaTable').appendChild(s);
        return s;
    }
}



function addNewClient()
{
  var retVal = prompt("Enter New Client Name : ", "");
  
  if(retVal == null)
  return;
  
 if (confirm("Are you confirm the name ?\n"+retVal) == true) 
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
			validation.getClientName();
			addClientFilterOptions();
			
		}
	}			
	xmlhttp.open("POST","clientname.php?update="+retVal,true);
	xmlhttp.send();
 }
}

function createDropDown(arr,ele)
{
	ele.innerHTML = "";
   var init= true;
  
   for(var i=0;i<arr.length;i++)
   {
		if(init){
			var o = document.createElement('option');
			o.setAttribute('value',"")
			o.selected=true;
			o.innerHTML="";
			ele.appendChild(o);
			init = false;
		}
		
		var o = document.createElement('option');
		o.setAttribute('value',arr[i]);		
		o.innerHTML=arr[i];
		
		ele.appendChild(o);
	}
	
	
}


function addDetailSkill()
{
//<textarea rows="8" cols="50">
}

