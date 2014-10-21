<?php
//displaying values from database in table

$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con, "SELECT DISTINCT  ClientName FROM clientlist");
echo "<select id='clientFilter' onchange='showFilteredClient(this)' name='clientFilter'><option id='Lnt_client_0' value='All'>All</option>";
$clientId=0;

while ($row = mysqli_fetch_array($result)) {
$clientId++;
echo  "<option id='Lnt_client_".$clientId."' value='".$row['ClientName']."'>".$row['ClientName']."</option>";
}
echo "</select>"
?>







