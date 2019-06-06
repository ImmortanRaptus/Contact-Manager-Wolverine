<?php

require "Config.php";

$CID =  $_POST['CID'];

$sql="SELECT * FROM `Contact Information` WHERE `CID` = '" .$CID. "'";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
{
    $rows[] = $row;
}
echo json_encode($rows);
?>
