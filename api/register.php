<?php 
	header('Content-Type: application/json');
	require('connect.php');
	if(isset($_POST['username']))
	{
		$id = time();
		$username = $_POST['username'];
		$password = $_POST['password'];
		$email = $_POST('email');
		if(strlen($password)>=6)
		{
			$sql = "insert into tbl_user values ('".$id."','".$username."','".$password."','".$email."')";
			(int)$affected = mysqli_query($conn,$sql);
			if($affected == 1)
			{
				$selectSql = $id;
			    $dataResultApi['code'] = 0;
				$dataResultApi['message'] = "Register is Success.!";
				$dataResultApi['result'] = $selectSql;
				echo json_encode($dataResultApi);
				exit();
			}
			else
			{
				$dataResultApi['code']=1;
				$dataResultApi['message']="Please try again.!";
				echo json_encode($dataResultApi);
			}
		}
		else
		{
			$dataResultApi['code']=1;
			$dataResultApi['message']="Require a password at least 6 characters!";
			echo json_encode($dataResultApi);
		}

	}
	else
	{
		$dataResultApi['code']=1;
		$dataResultApi['message']="You need to enter the username!";
		echo json_encode($dataResultApi);
	}
?>