<?php

//if already logged in check
if(isset($_SESSION))
	header('Location: ../mainpage.html');
else
	header('Location: ../login.html');
?>