<?php

//WIP
//show all contacts
require "Config.php";

//maybe needs more fields and what is CID?
$sql="INSERT INTO `Contact Information` (`First Name`, `Last Name`, `Home Phone`, 
`Work Phone`, `Cell Phone`, `Personal Email`, `Work Email`, `Address`, `UID`)".
    "VALUES (? , ?, ?, ?, ?, ?, ?, ?, ?)";
$userId = $_SESSION['userid'];
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
