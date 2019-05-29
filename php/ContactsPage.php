<?php

    //WIP
    //show all contacts
    include "Config.php";
    

    $sql="SELECT * FROM 'contact information' WHERE 'UID' = ?";
    
    //using cookie method
    $prepared=$conn->prepare($sql);
    $prepared->bind_param("s", $userId);
    $rows = array();
    while($row = mysqli_fetch_array($sql))
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
