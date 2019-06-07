<?php

	require "Config.php";
	//nuke it all
        session_destroy();
        //remove cookie
        $days = 30;
        setcookie ("rememberme","", time() - ($days * 86400 ));
        //go where after logout
        header('Location: ../index.html');
 
?>
