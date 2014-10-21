<?php
//fetching values and displaying in a table
$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$from =  ($_GET['reset_from']);
$to =  ($_GET['reset_to']);
$num_rows_inpage=5;



	if($from =='0' && $to =='0' ){
	$result = mysqli_query($con,"SELECT * FROM visadetails");
	$num_rows = mysqli_num_rows($result);
	echo $num_rows."-".$num_rows_inpage;

	}
	else{

	$result = mysqli_query($con,"SELECT * FROM visadetails LIMIT $from,$num_rows_inpage");

	$num_rows = mysqli_num_rows($result);
	while($row = mysqli_fetch_array($result)) {

	 echo  $row['Ps_no'].'||'.$row['Name'].'||'.$row['Status'].'||'.$row['AvailableBy'].'||'.$row['BaseAccount'].'||'.$row['BaseDH'].'||'.$row['PrimaryDomain'].'||'.$row['PrimarySkills'].'||'.$row['AdditionalSkills'].'||'.$row['VisaValidity'].'||'.$row['ClientName'].'||'.$row['BuHead'].'||'.$row['TargetDate'].'||'.$row['scheduleDate'].'@||@';
	 }

	}


mysqli_close($con);
?> 
