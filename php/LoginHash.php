<?php

    //use include for testing but needs to be require (not require_once)
    include "Config.php";

	$inData = getRequestInfo();

	//check if $_SESSION or $_COOKIE already set
    if (isset($_SESSION['userid']))
    {
    	header('Location: home.php');//you're still here so lets go to contact manager
    	exit;
    }
    else if ( isset($_COOKIE['rememberme'] ))
    {
        //decrypt cookie variable value
        $userid = decryptCookie($_COOKIE['rememberme']);
        //can change what we are selecting from here
        $sql_query = "SELECT count(*) as 'cntUser', 'user id' from 'user information' where 'user id' = '".$userid."' ";
        $result = mysqli_query($conn, $sql_query);
        $row = mysqli_fetch_array($result);

        $count = $row['cntUser'];

        if( $count > 0 )
        {
        	$_SESSION['userid'] = $userid;
        	header('Location: home.php');//I remember you, where we goin?
        	exit;
        }
    }

    //encrypt cookie
    function encryptCookie( $value )
    {
    	/* can change key to be anything, prob use their pass
    	so if users change pass they wont be remembered anymore
    	but we prob not even have change pass so yeah*/
    	$key = 'youkey';
    	$newvalue = base64_encode( openssl_encrypt( MCRYPT_RIJNDAEL_256, md5( $key ), $value, MCRYPT_MODE_CBC, md5( md5( $key ) ) ) );
    	return( $newvalue );

    }

    //decrypt cookie
    function decryptCookie( $value )
    {
    	$key = 'youkey';
    	$newvalue = rtrim( openssl_decrypt( MCRYPT_RIJNDAEL_256, md5( $key ), base64_decode( $value ), MCRYPT_MODE_CBC, md5( md5( $key ) ) ), "\0");
    	return( $newvalue );
    }

    //login button pressed
    if (isset($_POST['submit_button']))
    {
    	if ($username != "" && $password != "")
      {
      	//CHECK THE NAME OF THE POST 
        $username = mysqli_real_escape_string($conn,$_POST['username']); //USER NAME
        $password = mysqli_real_escape_string($conn,$_POST['password']); //PASSWORD

		  /*
		   * what it was before
		   * $sql_query = "SELECT * FROM `user information` WHERE `Username` = '$username'"; //prep SQL for USER and PASS
		   */

		  //this is prob where the issue was
		  $sql_query = "SELECT * FROM `user information` WHERE `Username` = '".$username."'"; //prep SQL for USER and PASS
		  $result = mysqli_query($conn, $sql_query); //check
		  if (mysqli_num_rows($result) > 0)
		  {
		  	$row = mysqli_fetch_array($result)
			  if (password_verify($password, $row[`password`]);
			  {
			  	$userid = $result['user id'];
			  	if (isset($_POST['rememberme']))
			  	{// Set cookie variables
			  		$days = 30;
			  		$value = encryptCookie($userid);
			  		setcookie ("rememberme",$value,time() + ($days * 86400 ));}
			  		$_SESSION['userid'] = $userid;
			  		header('Location: home.php');//where we goin after loggin in?
					exit;
				}
    		}
    		else
    			{
    			echo "Invalid username and password";
    			}
      }
    }




	/*Leinecker Login as reference

	$id = 0;
	$firstName = "";
	$lastName = "";

	$conn = new mysqli("localhost", "leinecker", "TestMeNow", "COP4331LAMP");
	if ($conn->connect_error)
	{
		returnWithError( $conn->connect_error );
	}
	else
	{
		$sql = "SELECT ID,firstName,lastName FROM Users where Login='" . $inData["login"] . "' and Password='" . $inData["password"] . "'";
		$result = $conn->query($sql);
		if ($result->num_rows > 0)
		{
			$row = $result->fetch_assoc();
			$firstName = $row["firstName"];
			$lastName = $row["lastName"];
			$id = $row["ID"];

			returnWithInfo($firstName, $lastName, $id );
		}
		else
		{
			returnWithError( "No Records Found" );
		}
		$conn->close();
	}

	*/

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
