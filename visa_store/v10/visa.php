<?php


$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$mode=($_GET['visa_mode']);
	

switch ($mode) {
  case "newentry":
	saveNewVisaEntry();
    break;
  case "search":
	searchPsNo();
    break;
  case "update":
	updateData();
    break;
  case "shared":
	sharedClient();
    break; 	
  default:
    echo "Error in Mode";
}

function saveNewVisaEntry()
{
	global $con;
	$uname = $_GET['reg_uname'];
	$psno = $_GET['reg_psno'];
	$bu = $_GET['reg_BU'];
	$Current_DH = $_GET['reg_Current_DH'];
	$Current_PoC = $_GET['reg_Current_PoC'];
	$status = $_GET['reg_status'];
	$available = $_GET['reg_available'];
	$priDomain = $_GET['reg_priDomain'];
	$addSkills = $_GET['reg_addSkills'];
	$selected_client = $_GET['reg_selected_client'];
	$boarding = $_GET['reg_boarding'];
	$PoC_DH = $_GET['reg_PoC_DH'];
	
	mysqli_query($con,"INSERT INTO visadetailstable (Name,Ps_no,BU,Current_DH,Current_PoC,Availability_Status,Available_Date,Primary_Domain,Detailed_Skills,Selected_client,Onboardng_Date,PoC_DH) VALUES ('$uname','$psno','$bu','$Current_DH','$Current_PoC','$status','$available','$priDomain','$addSkills','$selected_client','$boarding','$PoC_DH')");
	echo 'valid';
}


function searchPsNo()
{
	global $con;
	$psno = $_GET['reg_psno'];
	$result = mysqli_query($con,"SELECT * FROM visadetailstable Where Ps_no='$psno' limit 1");
	$num_rows = mysqli_num_rows($result);
	$row = mysqli_fetch_array($result);

	if($num_rows == 1)
	{
	
		echo  $row['Name'].'||'.$row['BU'].'||'.$row['Current_DH'].'||'.$row['Current_PoC'].'||'.$row['Availability_Status'].'||'.$row['Available_Date'].'||'.$row['Primary_Domain'].'||'.$row['Detailed_Skills'].'||'.$row['Selected_client'].'||'.$row['Onboardng_Date'].'||'.$row['PoC_DH'];
	}
	else
	{
		echo 'invalid';
	}
}

function updateData()
{
	global $con;
	$uname = $_GET['reg_uname'];
	$psno = $_GET['reg_psno'];
	$bu = $_GET['reg_BU'];
	$Current_DH = $_GET['reg_Current_DH'];
	$Current_PoC = $_GET['reg_Current_PoC'];
	$status = $_GET['reg_status'];
	$available = $_GET['reg_available'];
	$priDomain = $_GET['reg_priDomain'];
	$addSkills = $_GET['reg_addSkills'];
	$selected_client = $_GET['reg_selected_client'];
	$boarding = $_GET['reg_boarding'];
	$PoC_DH = $_GET['reg_PoC_DH'];
	
	echo 'update call';
	// mysqli_query($con,"UPDATE visadetailstable SET Name='$uname',BU='$bu',Current_DH='$Current_DH',Current_PoC='$Current_PoC',Availability_Status='$status',Primary_Domain='$priDomain',Detailed_Skills='$addSkills',Selected_client='$selected_client',Onboardng_Date='$boarding',PoC_DH='$PoC_DH' WHERE  ");
	 
}

function sharedClient()
{
	global $con;
	$psno = $_GET['reg_psno'];
	$result = mysqli_query($con,"SELECT * FROM visadetailstable Where Ps_no='$psno'");
	$num_rows = mysqli_num_rows($result);
	echo $num_rows."@||@";
	if($num_rows > 0)
	{
		while ($row = mysqli_fetch_array($result)) {
		echo  $row['slno'].'-'.$row['ClientName'].'||'.$row['Shared_Date'].'||'.$row['Closure_Date'].'||'.$row['Shared_PoC_DH'].'@||@';
		}
	}
	else
	{
	 echo 'invalid';
	}
}

mysqli_close($con);
?>



