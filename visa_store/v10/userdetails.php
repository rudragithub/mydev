<?php

$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

session_start();
$sessionuser = $_SESSION['login_user'];
$checkUser = mysqli_query($con,"SELECT UserName FROM adminuser WHERE UserName='$sessionuser'");
if(mysqli_num_rows($checkUser) == 0)
die;

$param_cnt = 0;
  

if (!isset($_GET['reg_psno'])) {$username=$_GET['reg_psno'] = '';}else{$username=$_GET['reg_psno'];$param_cnt++;};
if (!isset($_GET['reg_uname'])) {$Name=$_GET['reg_uname'] = '';}else{$Name=$_GET['reg_uname'];$param_cnt++;};
if (!isset($_GET['reg_status'])) {$Status=$_GET['reg_status'] = '';}else{$Status=$_GET['reg_status'];$param_cnt++;};
if (!isset($_GET['reg_available'])) {$AvailableBy=$_GET['reg_available'] = '';}else{$AvailableBy=$_GET['reg_available'];$param_cnt++;};
if (!isset($_GET['reg_baseaccount'])) {$BaseAccount=$_GET['reg_baseaccount'] = '';}else{$BaseAccount=$_GET['reg_baseaccount'];$param_cnt++;};
if (!isset($_GET['reg_baseDH'])) {$BaseDH=$_GET['reg_baseDH'] = '';}else{$BaseDH=$_GET['reg_baseDH'];$param_cnt++;};
if (!isset($_GET['reg_priDomain'])) {$PrimaryDomain=$_GET['reg_priDomain'] = '';}else{$PrimaryDomain=$_GET['reg_priDomain'];$param_cnt++;};
if (!isset($_GET['reg_priSkills'])) {$PrimarySkills=$_GET['reg_priSkills'] = '';}else{$PrimarySkills=$_GET['reg_priSkills'];$param_cnt++;};
if (!isset($_GET['reg_addSkills'])) {$AdditionalSkills=$_GET['reg_addSkills'] = '';}else{$AdditionalSkills=$_GET['reg_addSkills'];$param_cnt++;};
if (!isset($_GET['reg_visaValid'])) {$visaValid=$_GET['reg_visaValid'] = '';}else{$visaValid=$_GET['reg_visaValid'];$param_cnt++;};


if (!isset($_GET['reg_update'])) {$updateDetails=$_GET['reg_update'] = '';}else{$updateDetails=$_GET['reg_update'];$param_cnt++;};

if (!isset($_GET['chk'])) {$qry_status=$_GET['chk'] = '';}else{$qry_status=$_GET['chk'];};
if (!isset($_GET['UorI'])) {$UpdateORInsert=$_GET['UorI'] = '';}else{$UpdateORInsert=$_GET['UorI'];};



if($param_cnt == 13)
{
    if($qry_status == 1)
	{
		$sql="INSERT INTO visadetailstable (Name,Ps_no,BU,Current_DH,Current_PoC,Availability_Status,Available_Date,Primary_Domain,Detailed_Skills,Selected_client,Onboardng_Date,PoC_DH) VALUES ('$username','$Name','$Status','$AvailableBy','$BaseAccount','$BaseDH','$PrimaryDomain','$PrimarySkills','$AdditionalSkills','$visaValid')";
		
	}
	else if($qry_status == 2)
	{
	  $sql="UPDATE VisaDetails SET Name='$Name' , Status='$Status', AvailableBy='$AvailableBy', BaseAccount='$BaseAccount', BaseDH='$BaseDH', PrimaryDomain='$PrimaryDomain', PrimarySkills='$PrimarySkills', AdditionalSkills='$AdditionalSkills', VisaValidity='$visaValid'  WHERE Ps_no='$username'";  
	}
	
	if (!mysqli_query($con,$sql)) {  die('Error: ' . mysqli_error($con));}else{echo "valid";};
	
	
}	  
else if($param_cnt == 11)
{	
   $token = strtok($updateDetails, "||"); 
   $checkUpdate = (explode("||",$UpdateORInsert));
   $init_row_update=false;
   
   define('count', 0);
   settype($count, "integer");
   
	while ($token !== false)
	{	   
		$dataArr= (explode(",",$token));	
		
		if($init_row_update == false || $checkUpdate[$count] != "0" )
		{			
			if($checkUpdate[$count] == "0")
			$init_row_update = true;
			else
			$init_row_update = false;			
			
			 mysqli_query($con,"UPDATE VisaDetails SET Name='$Name' , Status='$Status', AvailableBy='$AvailableBy', BaseAccount='$BaseAccount', BaseDH='$BaseDH', PrimaryDomain='$PrimaryDomain', PrimarySkills='$PrimarySkills', AdditionalSkills='$AdditionalSkills', VisaValidity='$visaValid', ClientName='$dataArr[0]', BuHead='$dataArr[1]',TargetDate='$dataArr[2]',scheduleDate='$dataArr[3]'WHERE slno='$checkUpdate[$count]'");  
			 
		}
		if($init_row_update == true)
		{		
			
			 mysqli_query($con,"INSERT INTO VisaDetails (Ps_no,Name,Status,AvailableBy,BaseAccount,BaseDH,PrimaryDomain,PrimarySkills,AdditionalSkills,VisaValidity,	ClientName,BuHead,TargetDate,scheduleDate) VALUES ('$username','$Name','$Status','$AvailableBy','$BaseAccount','$BaseDH','$PrimaryDomain','$PrimarySkills','$AdditionalSkills','$visaValid','$dataArr[0]','$dataArr[1]','$dataArr[2]','$dataArr[3]')");	
		}		
		
		$token = strtok("||");	
		$count = $count+1;
	}    
	 echo 'valid';
}
else
{
  echo 'invalid';
  
}


mysqli_close($con);
?>
