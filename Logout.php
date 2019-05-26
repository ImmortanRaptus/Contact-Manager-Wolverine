<?php

    //WIP
    include "Config.php";

    // Check user login or not
    if(!isset($_SESSION['userid']))
    {
        header('Location: index.php');
    }
    // logout
    if(isset($_POST['logout_button']))
    {
        session_destroy();
        //remove cookie
        $days = 30;
        setcookie ("rememberme","", time() - ($days * 86400 ));
        //go where after logout
        header('Location: index.php');
    }
?>