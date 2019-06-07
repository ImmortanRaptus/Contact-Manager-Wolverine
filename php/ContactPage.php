<?php

//show all contacts
require "Config.php";

$userId =  $_SESSION['userid'];

//show all contacts that match user ID
$sql="SELECT * FROM `Contact Information` WHERE `UID` = '" .$userId. "'";

//get info from DB and send out JSON
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
{
    $rows[] = $row;
}

echo json_encode($rows);



//helper funcitons
function getRequestInfo() {
    return json_decode(file_get_contents('php://input'), true);
}
function sendResultInfoAsJson( $obj )
{
    header('Content-type: application/json');
    echo $obj;
}
function returnWithError( $error ) {
    $retValue='{"user_id":0, "username":"", "password_hash":"", "Error": "'.$error.'"}';
    return sendResultInfoAsJson($retValue);
}
function returnWithInfo( $id, $username, $password_hash )
{
    $retValue = '{"user_id":' . $id . ',"username":"' . $username . '","password_hash":"' . $password_hash . '"}';
    sendResultInfoAsJson( $retValue );
}

?>
