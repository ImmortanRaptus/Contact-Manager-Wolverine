<?php

//WIP
//show all contacts
include "Config.php";

//NEEDS MORE FIELDS, probably
//GOTTA FILL OUT THE FIELDS
$sql="SELECT * FROM 'contact information' WHERE 'UID' = ?" . "AND (('First Name' LIKE ?) OR ('Last Name' LIKE ?))";
$userId = $_SESSION['userid'];
$searchData = $_POST['Search'];

//using cookie method
//search for first and last name but we can do whatever
$prepared=$conn->prepare($sql);
$prepared->bind_param("sss", $userId, $searchData, $searchData);
$rows = array();
while($row = mysqli_fetch_array($sql))
{
    $rows[] = $row;
}
echo json_encode($rows);
