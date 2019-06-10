<?php
require "Config.php";
$username=$_GET['username'];
echo $username;
$sql = "UPDATE `User Information` SET `Verified` = 1 where `Username` = ?";
$usernameVerify = $conn->prepare($sql);
$usernameVerify->bind_param("s", $username);
$usernameVerify->execute();
echo $username;
header('Location: ../login.html');
?>