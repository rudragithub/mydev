//--------------- search page  ----------------------- testing code need to modify 

function searchDetails()
{
validation.searchPage(document.getElementById('reg_psno').value)

}

function passSearchDataToTextFields(r)
{
	
	document.getElementById('reg_uname').value = r.split("||")[0] ;	
	document.getElementById('reg_status').value = r.split("||")[1] ;
	document.getElementById('reg_available').value = r.split("||")[2] ;
	document.getElementById('reg_baseaccount').value = r.split("||")[3] ;
	document.getElementById('reg_baseDH').value = r.split("||")[4] ;
	document.getElementById('reg_priDomain').value = r.split("||")[5] ;
	document.getElementById('reg_priSkills').value = r.split("||")[6] ;
	document.getElementById('reg_addSkills').value = r.split("||")[7] ;
	document.getElementById('reg_visa_year').value=String(r.split("||")[8]).split("-")[0];
	document.getElementById('reg_visa_month').value=String(r.split("||")[8]).split("-")[1];
	document.getElementById('reg_visa_day').value=String(r.split("||")[8]).split("-")[2];

	document.getElementById('search_modify').disabled=false;
}


function modifyData()
{
	document.getElementById('reg_psno').disabled=true;

	document.getElementById('search_update').disabled = false ;	
	document.getElementById('search_save').disabled = false ;
	
	document.getElementById('reg_uname').disabled = false ;	
	document.getElementById('reg_status').disabled = false ;
	document.getElementById('reg_available').disabled = false;
	document.getElementById('reg_baseaccount').disabled = false ;
	document.getElementById('reg_baseDH').disabled = false ;
	document.getElementById('reg_priDomain').disabled = false ;
	document.getElementById('reg_priSkills').disabled = false;
	document.getElementById('reg_addSkills').disabled = false ;
	document.getElementById('reg_visa_year').disabled = false ;
	document.getElementById('reg_visa_month').disabled = false ;
	document.getElementById('reg_visa_day').disabled = false ;
	
	
	document.getElementById('reg_uname').style.backgroundColor='white'; 
	document.getElementById('reg_status').style.backgroundColor='white'; 
	document.getElementById('reg_available').style.backgroundColor='white'; 
	document.getElementById('reg_baseaccount').style.backgroundColor='white'; 
	document.getElementById('reg_baseDH').style.backgroundColor='white'; 
	document.getElementById('reg_priDomain').style.backgroundColor='white'; 
	document.getElementById('reg_priSkills').style.backgroundColor='white'; 
	document.getElementById('reg_addSkills').style.backgroundColor='white'; 
	document.getElementById('reg_visa_year').style.backgroundColor='white'; 
	document.getElementById('reg_visa_month').style.backgroundColor='white'; 
	document.getElementById('reg_visa_day').style.backgroundColor='white'; 
}

