<?php

//show all contacts
require "Config.php";


//inserts into DB based on these fields, allows NULL / empty
$sql="INSERT INTO `Contact Information` (`First Name`, `Last Name`, `Home Phone`, 
`Work Phone`, `Cell Phone`, `Personal Email`, `Work Email`, `Address`, `UID`)".
    "VALUES (? , ?, ?, ?, ?, ?, ?, ?, ?)";
$firstName = $_POST['First'];
$lastName = $_POST['Last'];
$homePhone = $_POST['HomePhone'];
$workPhone = $_POST['WorkPhone'];
$cellPhone = $_POST['CellPhone'];
$homeEmail = $_POST['HomeEmail'];
$workEmail = $_POST['WorkEmail'];
$address = $_POST['Address'];
$UID = $_SESSION['userid'];

//using cookie method
//search for first and last name but we can do whatever
$prepared=$conn->prepare($sql);
$prepared->bind_param("sssssssss", $firstName, $lastName, $homePhone, $workPhone, $cellPhone,
    $homeEmail, $workEmail, $address, $UID);
$prepared->execute();

//sends what was recently inserted as a JSON
$CID = $conn->insert_id;
$sql="SELECT * FROM `Contact Information` WHERE `CID` = '" .$CID. "'";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
{
    $rows[] = $row;
}
echo json_encode($rows);

?>
