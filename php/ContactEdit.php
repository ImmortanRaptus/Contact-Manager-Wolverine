<?php
//Edit Contact
require "Config.php";

//Update At Given CID (Because CID is unique)
$sql="UPDATE `Contact Information` SET `First Name` = ? , `Last Name` = ?, `Home Phone` = ?, 
`Work Phone` = ?, `Cell Phone` = ? , `Personal Email` = ? , `Work Email` = ? , `Address` = ? WHERE `CID` = ?";

//receive inputs via POST
$firstName = $_POST['First'];
$lastName = $_POST['Last'];
$homePhone = $_POST['HomePhone'];
$workPhone = $_POST['WorkPhone'];
$cellPhone = $_POST['CellPhone'];
$homeEmail = $_POST['HomeEmail'];
$workEmail = $_POST['WorkEmail'];
$address = $_POST['Address'];
$CID = $_POST['CID'];

//prep and execute statements
$prepared=$conn->prepare($sql);
$prepared->bind_param("sssssssss", $firstName, $lastName, $homePhone, $workPhone, $cellPhone,
    $homeEmail, $workEmail, $address, $CID);
$prepared->execute();

//same as before
$sql="SELECT * FROM `Contact Information` WHERE `CID` = '" .$CID. "'";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
{
    $rows[] = $row;
}
echo json_encode($rows);


?>