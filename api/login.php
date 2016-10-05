<?php
	header("Content-type: application/json");
	require('conect.php');
	if(isset($_POST['username'])
	{
		$username = $_POST['username'];
		$password = $_POST['password'];
		$sql = "select * from tbl_user where username = '".$username."' and password = '".$password."'";
		$checkLogin = mysqli_query($conn,$sql);
		if(mysqli_num_rows($checkLogin)>0)
		{
			$resultArray = mysqli_fetch_array($checkLogin, MYSQL_ASSOC);
			$dataResultApi['code'] = 0;
			$dataResultApi['message'] = "Login is success!";
			$dataResultApi['result'] = $resultArray;
			echo json_encode($dataResultApi, JSON_NUMERIC_CHECK);
			exit();
		}
		else
		{
			$dataResultApi['code'] = 1;
			$dataResultApi['message'] = "Username or Password is wrong!";
			echo json_encode($dataResultApi);
		}
	}else{
		$dataResultApi['code']=1;
		$dataResultApi['message']="This account does not exist!";
		echo json_encode($dataResultApi);
	}
?>