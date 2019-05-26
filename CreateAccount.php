<?php

    //WORK IN PROGRESS
    //include config file but change to require
    include "Config.php";

    $inData = getRequestInfo();

    $username=$_POST["username"];
    $password=$_POST["password"];

    //is the user name in the databse already
    $sql = "SELECT * FROM 'user information' where 'Username' = ?";
    $usernameTaken = $conn->prepare($sql);
    $usernameTaken->bind_param("s", $username);
    $usernameTaken->execute();
    $result = $usernameTaken->get_result();
    $nameChecker = $result->fetch_all();
    //should be empty if it isnt
    if (count($nameChecker) > 0)
    {
        //send error and maybe not close
        returnWithError();
        $conn->close();
        return;
    }

    //ok time to add the new user
    $sql = "INSERT INTO 'user information' ('username', 'password') " . "VALUES (? , ?)";
    $addNewUser=$conn->prepare($sql);
    $addNewUser->bind_param("ss", $username, $password);

    $addNewUser->execute();

    /*maybe redirect to different page
    header('Location: index.php');
    */

    //maybe don't need to close, need to test
    $conn->close();






    //helper funcitons
    function getRequestInfo()
    {
        return json_decode(file_get_contents('php://input'), true);
    }

    function sendResultInfoAsJson( $obj )
    {
        header('Content-type: application/json');
        echo $obj;
    }
    
    function returnWithError( $err )
    {
        $retValue = '{"id":0,"firstName":"","lastName":"","error":"' . $err . '"}';
        sendResultInfoAsJson( $retValue );
    }
    
    function returnWithInfo( $firstName, $lastName, $id )
    {
        $retValue = '{"id":' . $id . ',"firstName":"' . $firstName . '","lastName":"' . $lastName . '","error":""}';
        sendResultInfoAsJson( $retValue );
    }

?>