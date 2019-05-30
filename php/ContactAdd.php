<?php

//WIP
//show all contacts
include "Config.php";

//maybe needs more fields and what is CID?
$sql="INSERT INTO 'contact information' ('First Name', 'Last Name', 'Home Phone', 
'Work Phone', 'Cell Phone', 'Personal Email', 'Work Email', 'Address', 'CID', 'UID')".
    "VALUES (? , ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$userId = $_SESSION['userid'];
$firstName = $_POST['First'];
$lastName = $_POST['Last'];
$homePhone = $_POST['Home Phone'];
$workPhone = $_POST['Work Phone'];
$cellPhone = $_POST['Cell Phone'];
$homeEmail = $_POST['Home Email'];
$workEmail = $_POST['Work Email'];
$address = $_POST['Address'];
$CID = $_POST['Dunno'];
$UID = $_SESSION['userid'];

//get CID from the mysql server then return it to javascript
$sql_query = SELECT LAST_INSERT_ID();
$CID= $_P0ST[json_encode($sql_query)];


//using cookie method
//search for first and last name but we can do whatever
$prepared=$conn->prepare($sql);
$prepared->bind_param("ssssssssss", $firstName, $lastName, $homePhone, $workPhone, $cellPhone,
    $homeEmail, $workEmail, $address, $CID, $UID);
$prepared->execute();
