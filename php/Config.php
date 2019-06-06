<?php

    session_start();

    //so I dont have to go into each and edit multiple times
    $host = "localhost"; //where is the sql hosted prob local
    $user = "root"; //name we login for sql
    $password = "**********"; //password for sql
    $databaseName = "Contact Manager"; //name of db

    //establish connection with sql database
    $conn = mysqli_connect($host, $user, $password, $databaseName);

    //check connection
    if (!$conn)
    {
        die("Connection to SQL failed: " . mysqli_connect_error() );
    }

?>
