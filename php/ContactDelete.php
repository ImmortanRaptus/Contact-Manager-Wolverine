<?php

//delete a contact from DB
require "Config.php";

//delete using CID
$sql="DELETE FROM `Contact Information` WHERE `CID` = ? ";
$CID = $_POST['CID'];
$prepared=$conn->prepare($sql);
$prepared->bind_param("i", $CID);
$prepared->execute();
?>
