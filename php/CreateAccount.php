<?php
//WORK IN PROGRESS
//include config file but change to require
require "Config.php";

$username=$_POST["User"];
$password=$_POST["Pass"];
$email=$_POST["Email"];
$errorMessage = "";//ERROR MESSAGE


//check if the user name or email in the databse already
$sql = "SELECT * FROM `User Information` WHERE `Username` = ? OR `Email Address` = ?";
$usernameTaken = $conn->prepare($sql);
$usernameTaken->bind_param("ss", $username, $email);
$usernameTaken->execute();
$result = $usernameTaken->get_result();
$nameChecker = $result->fetch_all();


//should be empty if it isnt...
if (count($nameChecker) > 0)
{
    //...send error and maybe not close conn
    $errorMessage = "Error: yes";
    echo json_encode($errorMessage);
    $conn->close();
    return;
}

    $errorMessage = "Error: no";
    echo json_encode($errorMessage);

//ok time to add the new user
//first HASH THE PASSWORD
$password = password_hash($password, PASSWORD_BCRYPT);
$sql = "INSERT INTO `User Information` (`Username`, `Password`, `Email Address`) VALUES (? , ? , ?)";
$addNewUser=$conn->prepare($sql);
$addNewUser->bind_param("sss", $username, $password, $email);
$addNewUser->execute();

//Send Verification Email
//Send Verification Email
$msg = "Please follow this link so that you can verify your email adderess on Project Wolverine Portal: Https://www.ProjectWolverine.net/API/VerifyAccount.php?username=".$username;
$msg = wordwrap($msg,70);
mail($email, "Please Verify Your Account With Project Wolverine Portal", $msg);


//code below is not used
//$errorMessage = "Account Creation Successful! Close Box To Redirect To Login...";//ERROR MESSAGES
//echo "<script type='text/javascript'>alert('$errorMessage');</script>";//popup displaying error

//redirect on account creation success
//header('Location: ../login.html');

//also allows redirection easily
//header("refresh: .1; url = https://www.projectwolverine.net/login.html");




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
