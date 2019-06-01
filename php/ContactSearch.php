<?php

//WIP
//show all contacts
include "Config.php";

//NEEDS MORE FIELDS, probably
//GOTTA FILL OUT THE FIELDS

$userid = mysqli_real_escape_string($conn,$_POST['userid']); //user ID
$searchData = mysqli_real_escape_string($conn,$_POST['Search']); //Search form input
//THIS IS WHERE WE WILL ADD MORE FIELDS AS NECESSARY
$sql="SELECT * FROM `Contact Information` WHERE `UID` = '" .$userid. "' AND ((`First Name` LIKE '" .$searchData. "') OR (`Last Name` LIKE '" .$searchData. "'))";

//using cookie method
//search for first and last name but we can do whatever
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
{
    $rows[] = $row;
}

echo json_encode($rows);

?>
